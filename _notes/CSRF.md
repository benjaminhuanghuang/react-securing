# Cross-site request Forgery

Cross-site request forgery is any form of malicious code that is executed when a user is authenticated to a trusted website. 

For example, the authenticated user could be doing any kind of unwanted transactions in the trusted website such as changing passwords, transferring funds, et cetera. [这些malicious code来自别的网站]

There are two ways to prevent CSRF. 
1. checking the headers to validate the request is from the same origin. So the header of the request website client needs to be from the same HTTP URL as the server. And as a general rule, you want to avoid allowing CORs or cross-origin request. Most browsers protect you from doing this.

2. once the previous step has been done then we need to check for an encrypted or signed token which should be provided with the request. If that check is validated then the transaction can be completed as normal.