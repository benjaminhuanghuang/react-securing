# XSS (cross site scripting)

XSS attacks are malicious scripts that are injected into the DOM of unprotected web applications. 

It could just be an innocent alert script injection or someone can get **access to your cookies** and steal your private credentials (passwords)


By default, React prevents us from injecting HTML code directly into our components. It is rendering the HTML as a string
```
XSS-protected.jsx
```


dangerouslySetInnerHTML can protect direct injection
```
  <script>alert(1);</script>
```
but not
```
  <img onmouseover="alert('This site is not secure');" src="attack.jpg" />
```