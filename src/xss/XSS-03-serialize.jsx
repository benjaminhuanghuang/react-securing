import React, { Component } from 'react';

import serialize from 'serialize-javascript';

// Let's suppose this response is coming from a service and have
// some XSS attacks in the content...
const response = [
  {
    id: 1,
    title: 'My blog post 1...',
    content: '<p>This is <strong>HTML</strong> code</p>',
  },
  {
    id: 2,
    title: 'My blog post 2...',
    content: '<p>Alert: <script>alert(1);</script></p>',
  },
  {
    id: 3,
    title: 'My blog post 3...',
    // xss
    content: `
        <p>
       <img onmouseover="alert('This site is not secure');" 
       src="attack.jpg" />
        </p>
      `,
  },
];

// JSON.stringify does not encode Html tag
const secureInitialState = serialize(response);
const initialState = JSON.stringify(response);

console.log(initialState);

const removeXSSAttacks = (html) => {
  const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
  let safeHtml = html;
  // Removing the <script> tags
  while (SCRIPT_REGEX.test(safeHtml)) {
    safeHtml = safeHtml.replace(SCRIPT_REGEX, '');
  }

  // Removing all events from tags...
  safeHtml = safeHtml.replace(/ on\w+="[^"]*"/g, '');

  return {
    __html: html,
  };
};

class Xss extends Component {
  render() {
    // Parsing the JSON string to an actual object...
    const posts = JSON.parse(secureInitialState);

    // Rendering our posts...
    return (
      <div className="Xss">
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            {/* React encode the html by default */}
            <p dangerouslySetInnerHTML={removeXSSAttacks(post.content)} />
          </div>
        ))}
      </div>
    );
  }
}

export default Xss;
