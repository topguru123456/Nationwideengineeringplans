"""Assign city/state locations to house design portfolio seeds."""
from __future__ import annotations

import re
from pathlib import Path

LOCATIONS = [
    "Los Angeles, CA",
    "San Diego, CA",
    "Newport Beach, CA",
    "Austin, TX",
    "Dallas, TX",
    "Scottsdale, AZ",
    "Portland, OR",
    "Denver, CO",
    "Napa, CA",
    "Seattle, WA",
    "Chicago, IL",
    "Atlanta, GA",
    "Houston, TX",
    "Charlotte, NC",
    "Tampa, FL",
    "Nashville, TN",
    "Raleigh, NC",
    "Orlando, FL",
    "Queens, NY",
    "Brooklyn, NY",
]

PATTERN = re.compile(r'(title: "[^"]+",\n\s+location: )"California"', re.MULTILINE)


def main() -> None:
    path = Path(__file__).resolve().parent.parent / "src/data/houseDesignProjects.ts"
    text = path.read_text(encoding="utf-8")
    matches = list(PATTERN.finditer(text))
    if len(matches) != len(LOCATIONS):
        raise SystemExit(f"Expected {len(LOCATIONS)} entries, found {len(matches)}")

    for match, location in reversed(list(zip(matches, LOCATIONS))):
        start, end = match.span()
        text = text[:start] + match.group(1) + f'"{location}"' + text[end:]

    path.write_text(text, encoding="utf-8")
    print(f"Updated {len(LOCATIONS)} house design locations in {path}")


if __name__ == "__main__":
    main()
