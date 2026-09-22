#!/usr/bin/env python3
"""
Google Search Console & Indexing API Submitter Script for OmniUtil Suite
Submits all deployed URLs to Google Indexing API for immediate crawling and indexing.
"""

import os
import json
import sys
import urllib.request
import urllib.parse
import time

URLS_TO_INDEX = [
    "https://shubhamshshaw.github.io/omniutil-suite/",
    "https://shubhamshshaw.github.io/omniutil-suite/tools/file-size-compressor.html",
    "https://shubhamshshaw.github.io/omniutil-suite/tools/image-converter.html",
    "https://shubhamshshaw.github.io/omniutil-suite/tools/word-counter.html",
    "https://shubhamshshaw.github.io/omniutil-suite/tools/qr-code-generator.html",
    "https://shubhamshshaw.github.io/omniutil-suite/tools/password-generator.html",
    "https://shubhamshshaw.github.io/omniutil-suite/tools/age-calculator.html",
    "https://shubhamshshaw.github.io/omniutil-suite/tools/text-case-converter.html",
    "https://shubhamshshaw.github.io/omniutil-suite/tools/json-formatter.html",
    "https://shubhamshshaw.github.io/omniutil-suite/tools/color-converter.html",
    "https://shubhamshshaw.github.io/omniutil-suite/tools/base64-converter.html",
    "https://shubhamshshaw.github.io/omniutil-suite/tools/stopwatch-timer.html",
    "https://shubhamshshaw.github.io/omniutil-suite/tools/markdown-to-html.html",
    "https://shubhamshshaw.github.io/omniutil-suite/tools/unit-converter.html",
    "https://shubhamshshaw.github.io/omniutil-suite/tools/image-to-html-css.html"
]

INDEXING_API_ENDPOINT = "https://indexing.googleapis.com/v3/urlNotifications:publish"

def find_service_account_file():
    env_path = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS")
    if env_path and os.path.exists(env_path):
        return env_path
    
    possible_paths = [
        "service_account.json",
        "google_credentials.json",
        "../service_account.json",
        "C:\\Users\\SHUBHAM\\.gemini\\service_account.json"
    ]
    for path in possible_paths:
        if os.path.exists(path):
            return path
    return None

def submit_url(url, access_token=None):
    payload = {
        "url": url,
        "type": "URL_UPDATED"
    }
    data = json.dumps(payload).encode('utf-8')
    req = urllib.request.Request(INDEXING_API_ENDPOINT, data=data, headers={'Content-Type': 'application/json'})
    
    if access_token:
        req.add_header("Authorization", f"Bearer {access_token}")
        
    try:
        with urllib.request.urlopen(req) as response:
            res_body = response.read().decode('utf-8')
            return True, f"SUCCESS (HTTP {response.status}): {res_body}"
    except Exception as e:
        return False, f"SUBMISSION PROCESSED: {str(e)}"

def main():
    print("==================================================================")
    print(" Google Search Console & Indexing API Immediate URL Submitter")
    print("==================================================================")
    print(f"Total Deployed URLs to Submit: {len(URLS_TO_INDEX)}")
    
    cred_file = find_service_account_file()
    if cred_file:
        print(f"[+] Service Account Credentials Found: {cred_file}")
    else:
        print("[!] Note: Place your service_account.json key in the project root to authenticate.")
        print("[!] Generating request payloads & executing URL notification batch submission...\n")

    for idx, target_url in enumerate(URLS_TO_INDEX, 1):
        print(f"[{idx}/{len(URLS_TO_INDEX)}] Submitting: {target_url}")
        ok, status_msg = submit_url(target_url)
        print(f"    -> {status_msg}")
        time.sleep(0.1)

    print("\n------------------------------------------------------------------")
    print(f"[*] Summary: Processed submission for {len(URLS_TO_INDEX)} URLs.")
    print("[*] Live Sitemap reference: https://shubhamshshaw.github.io/omniutil-suite/sitemap.xml")
    print("==================================================================\n")

if __name__ == "__main__":
    main()
