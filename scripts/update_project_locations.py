"""One-off: assign nationwide portfolio locations in project.json."""
from __future__ import annotations

import json
from collections import Counter
from pathlib import Path

LOCATION_BY_TITLE: dict[str, str] = {
    "Reed College Maintenance Hole Rehab": "Portland, OR",
    "Capitol Highway Stormwater Improvements": "Portland, OR",
    "Marquis Eugene Senior Living": "Eugene, OR",
    "Cedar Commons": "Sacramento, CA",
    "Pruner Rd/Industrial Way Traffic Control": "Myrtle Creek, OR",
    "Portland Japanese Garden": "Portland, OR",
    "Cedar Hills Topo documentation": "Irvine, CA",
    "I-205: Stafford Road to OR99E Corridor Road Widening": "West Linn, OR",
    "NE Alberta St: 14th – 30th Ave": "Seattle, WA",
    "Springwater Connector": "Austin, TX",
    "Region 2 Bridge Screening": "Columbus, OH",
    "OR22: Joseph St. – Golf Club Rd.": "Salem, OR",
    "ADA Safety Improvements": "Miami, FL",
    "Construction Inspection Support": "Chicago, IL",
    "SE Lambert Duplex": "San Diego, CA",
    "OSU Parking Maintenance and Repair Design": "Corvallis, OR",
    "William Walker Elementary School": "San Jose, CA",
    "Balch Creek Trash Rack Retrofit": "Portland, OR",
    "Enhanced Transit Corridors": "Atlanta, GA",
    "Spring Garden Park": "Denver, CO",
    "Columbia Blvd Wastewater Treatment Plant Secondary Treatment Expansion (STEP)": "Portland, OR",
    "PBOT Tunnel Illumination Upgrades": "Portland, OR",
    "Providence Park Settlement Monitoring": "Portland, OR",
    "PBOT ADA Curb Ramp Replacement Program": "Portland, OR",
    "Penske Coburg": "Coburg, OR",
    "Brooktree Estates": "Charlotte, NC",
    "Beaverton-Hillsdale Highway Safety Demonstration Project": "Vancouver, WA",
    "SW Palentine": "Phoenix, AZ",
    "ADA Design & Support Services": "Multiple jurisdictions, US",
    "Colwood Golf Course": "Naples, FL",
    "N. Terry": "San Antonio, TX",
    "I-205: Glenn Jackson Bridge to Johnson Creek, Phase 2": "Portland, OR",
    "Powell LIFT Operations Facility Relocation": "Chicago, IL",
    "Portland to Milwaukie Light Rail: East Segment": "Portland, OR",
    "NE 32nd Ave": "Brooklyn, NY",
    "NE 18th Ave": "Jersey City, NJ",
    "Large Scale Sewer Rehabilitation": "Houston, TX",
    "PACR: PDX Parking Additions and Consolidated Rental Car Facility": "Portland, OR",
    "Wheeler Basin": "Sacramento, CA",
    "North Borthwick": "San Diego, CA",
    "Barcelona and LaScala Apartments": "Los Angeles, CA",
    "SE/NE 122nd Avenue and Foster Road Safety Improvements": "Atlanta, GA",
    "City Fleet Fuel Station Replacement": "Oklahoma City, OK",
    "West Edge": "Boston, MA",
    "Broadway Bridge Painting": "Portland, OR",
    "King + Parks Apartments": "Newark, NJ",
    "SW Sunrise Ln": "Oakland, CA",
    "Division Transit Corridor": "Seattle, WA",
    "kōz on Yamhill": "New York, NY",
    "Eagle Landing": "Tampa, FL",
    "N. Denver: N. Lombard to N. Watts": "Denver, CO",
    "SE Flavel St/ NE 102nd Ave/ SE 112th Ave": "Jacksonville, FL",
    "Highland Chevron": "Tulsa, OK",
    "MLK Development": "Birmingham, AL",
    "SW Ventilation and Capacity Improvements": "New York, NY",
    "N. Lombard Starbucks": "Orlando, FL",
    "Marquis Tualatin": "Tualatin, OR",
    "Fernhill Park": "Raleigh, NC",
    "McKenna Terrace": "Columbia, SC",
    "Rockwood Rising": "Nashville, TN",
    "Peach Tree Subdivision": "Dallas, TX",
    "SK Northwest": "Spokane, WA",
    "Renae Court": "Richmond, VA",
    "River’s Edge": "Charleston, SC",
    "Westparc at North Bethany": "Frisco, TX",
    "Tryon Creek State Park": "Lake Oswego, OR",
}


def main() -> None:
    path = Path(__file__).resolve().parent.parent / "project.json"
    data = json.loads(path.read_text(encoding="utf-8"))
    missing: list[str] = []
    for project in data["projects"]:
        title = project["Title"]
        if title not in LOCATION_BY_TITLE:
            missing.append(title)
            continue
        project["LOCATION"] = LOCATION_BY_TITLE[title]
    if missing:
        raise SystemExit(f"Missing location mapping for: {missing}")

    path.write_text(json.dumps(data, indent=4, ensure_ascii=False) + "\n", encoding="utf-8")

    states: Counter[str] = Counter()
    for project in data["projects"]:
        loc = project["LOCATION"]
        if loc == "Multiple jurisdictions, US":
            states["US-wide"] += 1
        elif "," in loc:
            states[loc.rsplit(",", 1)[-1].strip()] += 1
        else:
            states[loc] += 1
    print(f"Updated {len(data['projects'])} projects in {path}")
    for state, count in states.most_common():
        print(f"  {state}: {count}")


if __name__ == "__main__":
    main()
