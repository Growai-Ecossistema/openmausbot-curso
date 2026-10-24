#!/usr/bin/env python3
"""Monta index.html autocontido a partir de src/."""
from pathlib import Path
base = Path(__file__).parent
t = (base/"src/template.html").read_text(encoding="utf-8")
data = (base/"src/data-1.js").read_text(encoding="utf-8") + "\n" + (base/"src/data-2.js").read_text(encoding="utf-8")
app = (base/"src/app.js").read_text(encoding="utf-8")
assert "</script" not in data.lower() and "</script" not in app.lower()
out = t.replace("/*DATA*/", data).replace("/*APP*/", app)
(base/"index.html").write_text(out, encoding="utf-8")
print("index.html", len(out.encode()), "bytes")
