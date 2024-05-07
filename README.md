# unphish

Cloudflare Phishing Report API end frontend. Can be used to report phishing
websites that are hosted on Cloudflare.

> [!WARNING]
> You might have to contact them to get your IP whitelisted.

## Notes

- You will need to run the program wrapped with the environment variables in
  `src/index.js`.

- The server will run on port 3000 by default. Assuming your server is running
  locally, you can make a POST request to it as follows:

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com", "justification":"This website is hosting phishing content.", "password":"yourpassword"}' \
  http://localhost:3000/report
```

- A web UI is provided, you can navigate to `localhost:3000` on your browser to
  use web frontend.

## License

```
MIT License

Copyright (c) 2024-present NotAShelf

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
