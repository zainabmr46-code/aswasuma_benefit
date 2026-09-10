import React from "react";

function ApplyAdd4({ formData, handlePropertyChange }) {
  return (
    <div className="steps">
      <div className="col">
        <table border={1}>
          <tr>
            <th colSpan={3}>7.1 Nature of the Housing Unit</th>
          </tr>
          <tr>
            <th>Code</th>
            <th>Housing Type</th>
            <th>Selection</th>
          </tr>
          <tr>
            <td>01</td>
            <td>Single house - Single floor</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="housing_nature"
                  value="01"
                  checked={formData?.property?.housing_nature === "01"}
                  onChange={handlePropertyChange}
                />
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>Single house - Two floors</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="housing_nature"
                  value="02"
                  checked={formData?.property?.housing_nature === "02"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>Single house - More than 2 floors</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="housing_nature"
                  value="03"
                  checked={formData?.property?.housing_nature === "03"}
                  onChange={handlePropertyChange}
                />
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>04</td>
            <td>Attached house / Sub-house (Annex)</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="housing_nature"
                  value="04"
                  checked={formData?.property?.housing_nature === "04"}
                  onChange={handlePropertyChange}
                />
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>05</td>
            <td>Flat / Apartment</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="housing_nature"
                  value="05"
                  checked={formData?.property?.housing_nature === "05"}
                  onChange={handlePropertyChange}
                />
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>06</td>
            <td>Luxury apartment</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="housing_nature"
                  value="06"
                  checked={formData?.property?.housing_nature === "06"}
                  onChange={handlePropertyChange}
                />
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>07</td>
            <td>Semi-detached house / Annex</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="housing_nature"
                  value="07"
                  checked={formData?.property?.housing_nature === "07"}
                  onChange={handlePropertyChange}
                />
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>08</td>
            <td>Slum / Shanty house</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="housing_nature"
                  value="08"
                  checked={formData?.property?.housing_nature === "08"}
                  onChange={handlePropertyChange}
                />
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>09</td>
            <td>Row houses / Line rooms</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="housing_nature"
                  value="09"
                  checked={formData?.property?.housing_nature === "09"}
                  onChange={handlePropertyChange}
                />
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>Mud / Wattle-and-daub house</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="housing_nature"
                  value="10"
                  checked={formData?.property?.housing_nature === "10"}
                  onChange={handlePropertyChange}
                />
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>Hut / Temporary shelter</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="housing_nature"
                  value="11"
                  checked={formData?.property?.housing_nature === "11"}
                  onChange={handlePropertyChange}
                />
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>Collective housing / Religious centers</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="housing_nature"
                  value="12"
                  checked={formData?.property?.housing_nature === "12"}
                  onChange={handlePropertyChange}
                />
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>Other</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="housing_nature"
                  value="13"
                  checked={formData?.property?.housing_nature === "13"}
                  onChange={handlePropertyChange}
                />
                Select
              </label>
            </td>
          </tr>
        </table>

        <br />

        <table border={1}>
          <tr>
            <th colSpan={3}>7.2 Main Floor Material</th>
          </tr>
          <tr>
            <th>Code</th>
            <th>Floor Material</th>
            <th>Selection</th>
          </tr>
          <tr>
            <td>01</td>
            <td>Cement</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="floor_material"
                  value="01"
                  checked={formData?.property?.floor_material === "01"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>Terrazzo / Ceramic tiles / Finished wood and timber sheets</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="floor_material"
                  value="02"
                  checked={formData?.property?.floor_material === "02"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>Concrete</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="floor_material"
                  value="03"
                  checked={formData?.property?.floor_material === "03"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>04</td>
            <td>Mud / Clay</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="floor_material"
                  value="04"
                  checked={formData?.property?.floor_material === "04"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>05</td>
            <td>Sand</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="floor_material"
                  value="05"
                  checked={formData?.property?.floor_material === "05"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>06</td>
            <td>Other impoverished/poor quality material</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="floor_material"
                  value="06"
                  checked={formData?.property?.floor_material === "06"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
        </table>
        <table border={1}>
          <tr>
            <th colSpan={3}>7.3 Roof Main Material</th>
          </tr>
          <tr>
            <th>Code</th>
            <th>Roof Material</th>
            <th>Selection</th>
          </tr>
          <tr>
            <td>01</td>
            <td>Tiles (Clay roof tiles)</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="roof_material"
                  value="01"
                  checked={formData?.property?.roof_material === "01"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>Asbestos</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="roof_material"
                  value="02"
                  checked={formData?.property?.roof_material === "02"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>Concrete</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="roof_material"
                  value="03"
                  checked={formData?.property?.roof_material === "03"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>04</td>
            <td>Aluminium composite sheets (Alubond / Zinc-aluminium)</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="roof_material"
                  value="04"
                  checked={formData?.property?.roof_material === "04"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>05</td>
            <td>Corrugated iron sheets / Tin</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="roof_material"
                  value="05"
                  checked={formData?.property?.roof_material === "05"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>06</td>
            <td>Coconut leaves / Palmyra leaves / Thatch (Straw)</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="roof_material"
                  value="06"
                  checked={formData?.property?.roof_material === "06"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>07</td>
            <td>Other impoverished/poor quality material</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="roof_material"
                  value="07"
                  checked={formData?.property?.roof_material === "07"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
        </table>

        <br />

        <table border={1}>
          <tr>
            <th colSpan={3}>7.4 House Main Material</th>
          </tr>
          <tr>
            <th>Code</th>
            <th>Wall Material</th>
            <th>Selection</th>
          </tr>
          <tr>
            <td>01</td>
            <td>Bricks</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="wall_material"
                  value="01"
                  checked={formData?.property?.wall_material === "01"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>Laterite stones (Kabok)</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="wall_material"
                  value="02"
                  checked={formData?.property?.wall_material === "02"}
                  onChange={handlePropertyChange}
                />
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>Cement blocks / Granite stones (Black stones)</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="wall_material"
                  value="03"
                  checked={formData?.property?.wall_material === "03"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>04</td>
            <td>Mud bricks / Sun-dried bricks</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="wall_material"
                  value="04"
                  checked={formData?.property?.wall_material === "04"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>05</td>
            <td>Mud / Wattle-and-daub</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="wall_material"
                  value="05"
                  checked={formData?.property?.wall_material === "05"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>

          <tr>
            <td>06</td>
            <td>Coconut leaves / Palmyra leaves etc.</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="wall_material"
                  value="06"
                  checked={formData?.property?.wall_material === "06"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>07</td>
            <td>Other poor quality material</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="wall_material"
                  value="07"
                  checked={formData?.property?.wall_material === "07"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
        </table>
        <br />
        <table border={1}>
          <tr>
            <th colSpan={3}>7.5 Floor Area</th>
          </tr>
          <tr>
            <th>Code</th>
            <th>Area Size</th>
            <th>Selection</th>
          </tr>
          <tr>
            <td>01</td>
            <td>Less than 500 sq ft</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="floor_area_code"
                  value="01"
                  checked={formData?.property?.floor_area_code === "01"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>500 sq ft or more</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="floor_area_code"
                  value="02"
                  checked={formData?.property?.floor_area_code === "02"}
                  onChange={handlePropertyChange}
                />
                Select
              </label>
            </td>
          </tr>
        </table>

        <br />

        <table border={1}>
          <tr>
            <th colSpan={2}>8. Ownership Information</th>
          </tr>
          <tr>
            <td>
              8.1 Does the house you reside in and the land belong to you or a
              member of your family?
            </td>
            <td>
              <div className="option">
                <label>
                  <input
                    type="radio"
                    name="property_ownership"
                    value="Yes"
                    checked={formData?.property?.property_ownership === "Yes"}
                    onChange={handlePropertyChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="property_ownership"
                    value="No"
                    checked={formData?.property?.property_ownership === "No"}
                    onChange={handlePropertyChange}
                  />
                  No
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              8.2 Do you or your family members own any other houses or
              buildings?
            </td>
            <td>
              <div className="option">
                <label>
                  <input
                    type="radio"
                    name="other_buildings"
                    value="Yes"
                    checked={formData?.property?.other_buildings === "Yes"}
                    onChange={handlePropertyChange}
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="other_buildings"
                    value="No"
                    checked={formData?.property?.other_buildings === "No"}
                    onChange={handlePropertyChange}
                  />{" "}
                  No
                </label>
              </div>
            </td>
          </tr>
        </table>

        <br />

        <table border={1}>
          <tr>
            <th colSpan={3}>9. Main Lighting Source</th>
          </tr>
          <tr>
            <th>Code</th>
            <th>Lighting Source Option</th>
            <th>Selection</th>
          </tr>
          <tr>
            <td>01</td>
            <td>Kerosene</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="lighting_source"
                  value="01"
                  checked={formData?.property?.lighting_source === "01"}
                  onChange={handlePropertyChange}
                />
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>Electricity</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="lighting_source"
                  value="02"
                  checked={formData?.property?.lighting_source === "02"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>Solar power</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="lighting_source"
                  value="03"
                  checked={formData?.property?.lighting_source === "03"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>04</td>
            <td>Generator / Battery</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="lighting_source"
                  value="04"
                  checked={formData?.property?.lighting_source === "04"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>05</td>
            <td>Biogas</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="lighting_source"
                  value="05"
                  checked={formData?.property?.lighting_source === "05"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>06</td>
            <td>Other poor quality material</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="lighting_source"
                  value="06"
                  checked={formData?.property?.lighting_source === "06"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
        </table>
      </div>

      <div className="col">
        <table border={1}>
          <tr>
            <th colSpan={3}>10. Main Source of Drinking Water</th>
          </tr>
          <tr>
            <th colSpan={3}>Well Water</th>
          </tr>
          <tr>
            <td>01</td>
            <td>Protected well</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="water_source"
                  value="01"
                  checked={formData?.property?.water_source === "01"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>Unprotected well (Public)</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="water_source"
                  value="02"
                  checked={formData?.property?.water_source === "02"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>Tube well</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="water_source"
                  value="03"
                  checked={formData?.property?.water_source === "03"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <th colSpan={3}>Pipe Water</th>
          </tr>
          <tr>
            <td>04</td>
            <td>Pipe water (National Water Supply and Drainage Board)</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="water_source"
                  value="04"
                  checked={formData?.property?.water_source === "04"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>05</td>
            <td>Pipe water (Community water organizations)</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="water_source"
                  value="05"
                  checked={formData?.property?.water_source === "05"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>06</td>
            <td>Pipe water (Local government authorities)</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="water_source"
                  value="06"
                  checked={formData?.property?.water_source === "06"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>07</td>
            <td>Pipe water (Private water projects)</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="water_source"
                  value="07"
                  checked={formData?.property?.water_source === "07"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <th colSpan={3}>Other</th>
          </tr>
          <tr>
            <td>08</td>
            <td>Tank / River / Canal / Stream / Spring / Sump</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="water_source"
                  value="08"
                  checked={formData?.property?.water_source === "08"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>09</td>
            <td>Rainwater</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="water_source"
                  value="09"
                  checked={formData?.property?.water_source === "09"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>Bottled water</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="water_source"
                  value="10"
                  checked={formData?.property?.water_source === "10"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>Purified water (RO filter water)</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="water_source"
                  value="11"
                  checked={formData?.property?.water_source === "11"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>Bowser (non RO filter water)</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="water_source"
                  value="12"
                  checked={formData?.property?.water_source === "12"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>Other</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="water_source"
                  value="13"
                  checked={formData?.property?.water_source === "13"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
        </table>

        <br />

        <table border={1}>
          <tr>
            <th colSpan={3}>11. Toilet Facilities</th>
          </tr>
          <tr>
            <th colSpan={3}>Inside the house / Attached to the house</th>
          </tr>
          <tr>
            <td>01</td>
            <td>Inside the house, for the exclusive use of the family</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_facility"
                  value="01"
                  checked={formData?.property?.toilet_facility === "01"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>Inside the house, shared with another family</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_facility"
                  value="02"
                  checked={formData?.property?.toilet_facility === "02"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>Outside the house, private use</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_facility"
                  value="03"
                  checked={formData?.property?.toilet_facility === "03"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <th colSpan={3}>Other</th>
          </tr>
          <tr>
            <td>04</td>
            <td>
              No toilet facility in the housing unit, but shared with another
              household
            </td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_facility"
                  value="04"
                  checked={formData?.property?.toilet_facility === "04"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>05</td>
            <td>Common / Public toilet</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_facility"
                  value="05"
                  checked={formData?.property?.toilet_facility === "05"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>06</td>
            <td>Does not use a toilet</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_facility"
                  value="06"
                  checked={formData?.property?.toilet_facility === "06"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
        </table>

        <br />

        <table border={1}>
          <tr>
            <th colSpan={3}>12. Nature of the Toilet</th>
          </tr>
          <tr>
            <td>01</td>
            <td>Water-sealed, connected to a septic tank</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_nature"
                  value="01"
                  checked={formData?.property?.toilet_nature === "01"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>Water-sealed, connected to a pit</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_nature"
                  value="02"
                  checked={formData?.property?.toilet_nature === "02"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>Water-sealed, connected to a sewerage network</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_nature"
                  value="03"
                  checked={formData?.property?.toilet_nature === "03"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>04</td>
            <td>Water-sealed, connected to a river or canal</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_nature"
                  value="04"
                  checked={formData?.property?.toilet_nature === "04"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>05</td>
            <td>Non-water-sealed pit toilet with a slab / cover</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_nature"
                  value="05"
                  checked={formData?.property?.toilet_nature === "05"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>06</td>
            <td>Non-water-sealed open pit toilet without a slab / cover</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_nature"
                  value="06"
                  checked={formData?.property?.toilet_nature === "06"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>07</td>
            <td>No facilities, uses bushes or open ground</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_nature"
                  value="07"
                  checked={formData?.property?.toilet_nature === "07"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>08</td>
            <td>Other (Without a water seal / pit)</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_nature"
                  value="08"
                  checked={formData?.property?.toilet_nature === "08"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
        </table>

        <br />

        <table border={1}>
          <tr>
            <th colSpan={2}>
              13. Is this a family with only the mother or father present?
            </th>
          </tr>
          <tr>
            <td>No (Both parents or standard household structure)</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="family_structure"
                  value="no"
                  checked={formData?.property?.family_structure === "no"}
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>Yes, Mother only</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="family_structure"
                  value="mother_only"
                  checked={
                    formData?.property?.family_structure === "mother_only"
                  }
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>Yes, Father only</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="family_structure"
                  value="father_only"
                  checked={
                    formData?.property?.family_structure === "father_only"
                  }
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
          <tr>
            <td>Yes, Guardian only</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="family_structure"
                  value="guardian_only"
                  checked={
                    formData?.property?.family_structure === "guardian_only"
                  }
                  onChange={handlePropertyChange}
                />{" "}
                Select
              </label>
            </td>
          </tr>
        </table>

        <br />
      </div>
    </div>
  );
}

export default ApplyAdd4;
