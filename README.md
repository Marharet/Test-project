### Description
This project is a simple HTTP server built with `Node.js` that serves HTML and CSS 
files from the [./template](./template) directory. The server handles requests, determines 
the type of content requested, and returns the appropriate files. If the requested 
file does not exist, the server returns a `404` error page.

### Project Structure
- `server.js`: the main server file that handles requests and responses.
- `./template/`: the directory containing HTML and CSS files to be served.

### Installation and Running
- Download and install the latest version of Node.js from the official website.
- Clone the repository or copy the files to a local directory.
- Execute the command `node server.js` in the terminal from the directory where server.js is located.
The server will be available at `http://localhost:3000`.
