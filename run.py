#!/usr/bin/env python3
from http.server import HTTPServer, SimpleHTTPRequestHandler, test


class CORSRequestHandler (SimpleHTTPRequestHandler):
    def end_headers (self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', '*')
        self.send_header('Access-Control-Allow-Headers', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        SimpleHTTPRequestHandler.end_headers(self)


if __name__ == '__main__':
    import argparse
    import os
    import sys

    PORT = 5501
    DIRECTORY = 'src'

    parser = argparse.ArgumentParser(description="A wrapper for http.server with generous CORS headers")
    parser.add_argument("port", nargs='?', type=int, default=PORT, help=f"specify alternate port (default: {PORT})")
    parser.add_argument("--bind", "-b", metavar='ADDRESS', help="specify alternate bind address (default: all interfaces)")
    parser.add_argument("--directory", "-d", default=DIRECTORY, metavar='DIRECTORY', help="specify alternate directory (default: current directory)")
    args = parser.parse_args()

    os.chdir(args.directory)
    test(CORSRequestHandler, HTTPServer, port=args.port, bind=args.bind)


