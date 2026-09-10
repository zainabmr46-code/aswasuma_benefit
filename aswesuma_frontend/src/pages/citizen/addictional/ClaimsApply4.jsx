import React from "react";

import languages from "../../../language";

function claimsApply4({ formData, handlePropertyChange, t }) {
  return (
    <div className="steps">
      <div className="col">
        <table border={1}>
          <tr>
            <th colSpan={3}>{t.housingUnitHeading}</th>
          </tr>
          <tr>
            <th>{t.codeHeader}</th>
            <th>{t.housingTypeHeader}</th>
            <th>{t.selectionHeader}</th>
          </tr>
          <tr>
            <td>01</td>
            <td>{t.houseType01}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="housing_nature"
                  value="01"
                  checked={formData?.property?.housing_nature === "01"}
                  onChange={handlePropertyChange}
                />
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>{t.houseType02}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="housing_nature"
                  value="02"
                  checked={formData?.property?.housing_nature === "02"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>{t.houseType03}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="housing_nature"
                  value="03"
                  checked={formData?.property?.housing_nature === "03"}
                  onChange={handlePropertyChange}
                />
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>04</td>
            <td>{t.houseType04}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="housing_nature"
                  value="04"
                  checked={formData?.property?.housing_nature === "04"}
                  onChange={handlePropertyChange}
                />
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>05</td>
            <td>{t.houseType05}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="housing_nature"
                  value="05"
                  checked={formData?.property?.housing_nature === "05"}
                  onChange={handlePropertyChange}
                />
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>06</td>
            <td>{t.houseType06}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="housing_nature"
                  value="06"
                  checked={formData?.property?.housing_nature === "06"}
                  onChange={handlePropertyChange}
                />
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>07</td>
            <td>{t.houseType07}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="housing_nature"
                  value="07"
                  checked={formData?.property?.housing_nature === "07"}
                  onChange={handlePropertyChange}
                />
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>08</td>
            <td>{t.houseType08}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="housing_nature"
                  value="08"
                  checked={formData?.property?.housing_nature === "08"}
                  onChange={handlePropertyChange}
                />
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>09</td>
            <td>{t.houseType09}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="housing_nature"
                  value="09"
                  checked={formData?.property?.housing_nature === "09"}
                  onChange={handlePropertyChange}
                />
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>{t.houseType10}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="housing_nature"
                  value="10"
                  checked={formData?.property?.housing_nature === "10"}
                  onChange={handlePropertyChange}
                />
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>{t.houseType11}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="housing_nature"
                  value="11"
                  checked={formData?.property?.housing_nature === "11"}
                  onChange={handlePropertyChange}
                />
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>{t.houseType12}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="housing_nature"
                  value="12"
                  checked={formData?.property?.housing_nature === "12"}
                  onChange={handlePropertyChange}
                />
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>{t.houseType13}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="housing_nature"
                  value="13"
                  checked={formData?.property?.housing_nature === "13"}
                  onChange={handlePropertyChange}
                />
                {t.selectText}
              </label>
            </td>
          </tr>
        </table>

        <br />

        <table border={1}>
          <tr>
            <th colSpan={3}>{t.floorMaterialHeading}</th>
          </tr>
          <tr>
            <th>{t.codeHeader}</th>
            <th>{t.floorMaterialHeader}</th>
            <th>{t.selectionHeader}</th>
          </tr>
          <tr>
            <td>01</td>
            <td>{t.floorMat01}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="floor_material"
                  value="01"
                  checked={formData?.property?.floor_material === "01"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>{t.floorMat02}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="floor_material"
                  value="02"
                  checked={formData?.property?.floor_material === "02"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>{t.floorMat03}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="floor_material"
                  value="03"
                  checked={formData?.property?.floor_material === "03"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>04</td>
            <td>{t.floorMat04}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="floor_material"
                  value="04"
                  checked={formData?.property?.floor_material === "04"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>05</td>
            <td>{t.floorMat05}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="floor_material"
                  value="05"
                  checked={formData?.property?.floor_material === "05"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>06</td>
            <td>{t.floorMat06}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="floor_material"
                  value="06"
                  checked={formData?.property?.floor_material === "06"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
        </table>
        <table border={1}>
          <tr>
            <th colSpan={3}>{t.roofMaterialHeading}</th>
          </tr>
          <tr>
            <th>{t.codeHeader}</th>
            <th>{t.roofMaterialHeader}</th>
            <th>{t.selectionHeader}</th>
          </tr>
          <tr>
            <td>01</td>
            <td>{t.roofMat01}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="roof_material"
                  value="01"
                  checked={formData?.property?.roof_material === "01"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>{t.roofMat02}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="roof_material"
                  value="02"
                  checked={formData?.property?.roof_material === "02"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>{t.roofMat03}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="roof_material"
                  value="03"
                  checked={formData?.property?.roof_material === "03"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>04</td>
            <td>{t.roofMat04}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="roof_material"
                  value="04"
                  checked={formData?.property?.roof_material === "04"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>05</td>
            <td>{t.roofMat05}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="roof_material"
                  value="05"
                  checked={formData?.property?.roof_material === "05"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>06</td>
            <td>{t.roofMat06}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="roof_material"
                  value="06"
                  checked={formData?.property?.roof_material === "06"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>07</td>
            <td>{t.roofMat07}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="roof_material"
                  value="07"
                  checked={formData?.property?.roof_material === "07"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
        </table>

        <br />

        <table border={1}>
          <tr>
            <th colSpan={3}>{t.wallMaterialHeading}</th>
          </tr>
          <tr>
            <th>{t.codeHeader}</th>
            <th>{t.wallMaterialHeader}</th>
            <th>{t.selectionHeader}</th>
          </tr>
          <tr>
            <td>01</td>
            <td>{t.wallMat01}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="wall_material"
                  value="01"
                  checked={formData?.property?.wall_material === "01"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>{t.wallMat02}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="wall_material"
                  value="02"
                  checked={formData?.property?.wall_material === "02"}
                  onChange={handlePropertyChange}
                />
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>{t.wallMat03}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="wall_material"
                  value="03"
                  checked={formData?.property?.wall_material === "03"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>04</td>
            <td>{t.wallMat04}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="wall_material"
                  value="04"
                  checked={formData?.property?.wall_material === "04"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>05</td>
            <td>{t.wallMat05}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="wall_material"
                  value="05"
                  checked={formData?.property?.wall_material === "05"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>

          <tr>
            <td>06</td>
            <td>{t.wallMat06}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="wall_material"
                  value="06"
                  checked={formData?.property?.wall_material === "06"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>07</td>
            <td>{t.wallMat07}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="wall_material"
                  value="07"
                  checked={formData?.property?.wall_material === "07"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
        </table>
        <br />
        <table border={1}>
          <tr>
            <th colSpan={3}>{t.floorAreaHeading}</th>
          </tr>
          <tr>
            <th>{t.codeHeader}</th>
            <th>{t.areaSizeHeader}</th>
            <th>{t.selectionHeader}</th>
          </tr>
          <tr>
            <td>01</td>
            <td>{t.areaSize01}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="floor_area_code"
                  value="01"
                  checked={formData?.property?.floor_area_code === "01"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>{t.areaSize02}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="floor_area_code"
                  value="02"
                  checked={formData?.property?.floor_area_code === "02"}
                  onChange={handlePropertyChange}
                />
                {t.selectText}
              </label>
            </td>
          </tr>
        </table>

        <br />

        <table border={1}>
          <tr>
            <th colSpan={2}>{t.ownershipHeading}</th>
          </tr>
          <tr>
            <td>{t.ownHouseQ}</td>
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
                  {t.yes}
                </label>
                <label>
                  <input
                    type="radio"
                    name="property_ownership"
                    value="No"
                    checked={formData?.property?.property_ownership === "No"}
                    onChange={handlePropertyChange}
                  />
                  {t.no}
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <td>{t.ownOtherHouseQ}</td>
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
                  {t.yes}
                </label>
                <label>
                  <input
                    type="radio"
                    name="other_buildings"
                    value="No"
                    checked={formData?.property?.other_buildings === "No"}
                    onChange={handlePropertyChange}
                  />{" "}
                  {t.no}
                </label>
              </div>
            </td>
          </tr>
        </table>

        <br />

        <table border={1}>
          <tr>
            <th colSpan={3}>{t.lightingHeading}</th>
          </tr>
          <tr>
            <th>{t.codeHeader}</th>
            <th>{t.lightingOptionHeader}</th>
            <th>{t.selectionHeader}</th>
          </tr>
          <tr>
            <td>01</td>
            <td>{t.light01}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="lighting_source"
                  value="01"
                  checked={formData?.property?.lighting_source === "01"}
                  onChange={handlePropertyChange}
                />
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>{t.light02}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="lighting_source"
                  value="02"
                  checked={formData?.property?.lighting_source === "02"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>{t.light03}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="lighting_source"
                  value="03"
                  checked={formData?.property?.lighting_source === "03"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>04</td>
            <td>{t.light04}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="lighting_source"
                  value="04"
                  checked={formData?.property?.lighting_source === "04"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>05</td>
            <td>{t.light05}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="lighting_source"
                  value="05"
                  checked={formData?.property?.lighting_source === "05"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>06</td>
            <td>{t.light06}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="lighting_source"
                  value="06"
                  checked={formData?.property?.lighting_source === "06"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
        </table>
      </div>

      <div className="col">
        <table border={1}>
          <tr>
            <th colSpan={3}>{t.waterHeading}</th>
          </tr>
          <tr>
            <th colSpan={3}>{t.wellWaterHeader}</th>
          </tr>
          <tr>
            <td>01</td>
            <td>{t.water01}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="water_source"
                  value="01"
                  checked={formData?.property?.water_source === "01"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>{t.water02}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="water_source"
                  value="02"
                  checked={formData?.property?.water_source === "02"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>{t.water03}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="water_source"
                  value="03"
                  checked={formData?.property?.water_source === "03"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <th colSpan={3}>{t.pipeWaterHeader}</th>
          </tr>
          <tr>
            <td>04</td>
            <td>{t.water04}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="water_source"
                  value="04"
                  checked={formData?.property?.water_source === "04"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>05</td>
            <td>{t.water05}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="water_source"
                  value="05"
                  checked={formData?.property?.water_source === "05"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>06</td>
            <td>{t.water06}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="water_source"
                  value="06"
                  checked={formData?.property?.water_source === "06"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>07</td>
            <td>{t.water07}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="water_source"
                  value="07"
                  checked={formData?.property?.water_source === "07"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <th colSpan={3}>{t.otherWaterHeader}</th>
          </tr>
          <tr>
            <td>08</td>
            <td>{t.water08}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="water_source"
                  value="08"
                  checked={formData?.property?.water_source === "08"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>09</td>
            <td>{t.water09}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="water_source"
                  value="09"
                  checked={formData?.property?.water_source === "09"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>{t.water10}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="water_source"
                  value="10"
                  checked={formData?.property?.water_source === "10"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>{t.water11}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="water_source"
                  value="11"
                  checked={formData?.property?.water_source === "11"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>{t.water12}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="water_source"
                  value="12"
                  checked={formData?.property?.water_source === "12"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>{t.water13}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="water_source"
                  value="13"
                  checked={formData?.property?.water_source === "13"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
        </table>

        <br />
        <br />

        <table border={1}>
          <tr>
            <th colSpan={3}>{t.toiletFacilitiesHeading}</th>
          </tr>
          <tr>
            <th colSpan={3}>{t.toiletInsideHeader}</th>
          </tr>
          <tr>
            <td>01</td>
            <td>{t.toilet01}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_facility"
                  value="01"
                  checked={formData?.property?.toilet_facility === "01"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>{t.toilet02}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_facility"
                  value="02"
                  checked={formData?.property?.toilet_facility === "02"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>{t.toilet03}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_facility"
                  value="03"
                  checked={formData?.property?.toilet_facility === "03"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <th colSpan={3}>{t.toiletOtherHeader}</th>
          </tr>
          <tr>
            <td>04</td>
            <td>{t.toilet04}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_facility"
                  value="04"
                  checked={formData?.property?.toilet_facility === "04"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>05</td>
            <td>{t.toilet05}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_facility"
                  value="05"
                  checked={formData?.property?.toilet_facility === "05"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>06</td>
            <td>{t.toilet06}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_facility"
                  value="06"
                  checked={formData?.property?.toilet_facility === "06"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
        </table>
        <br />
        <br />

        <table border={1}>
          <tr>
            <th colSpan={3}>{t.toiletNatureHeading}</th>
          </tr>
          <tr>
            <td>01</td>
            <td>{t.nature01}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_nature"
                  value="01"
                  checked={formData?.property?.toilet_nature === "01"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>02</td>
            <td>{t.nature02}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_nature"
                  value="02"
                  checked={formData?.property?.toilet_nature === "02"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>03</td>
            <td>{t.nature03}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_nature"
                  value="03"
                  checked={formData?.property?.toilet_nature === "03"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>04</td>
            <td>{t.nature04}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_nature"
                  value="04"
                  checked={formData?.property?.toilet_nature === "04"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>05</td>
            <td>{t.nature05}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_nature"
                  value="05"
                  checked={formData?.property?.toilet_nature === "05"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>06</td>
            <td>{t.nature06}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_nature"
                  value="06"
                  checked={formData?.property?.toilet_nature === "06"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>07</td>
            <td>{t.nature07}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_nature"
                  value="07"
                  checked={formData?.property?.toilet_nature === "07"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>08</td>
            <td>{t.nature08}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="toilet_nature"
                  value="08"
                  checked={formData?.property?.toilet_nature === "08"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
        </table>

        <br />
        <br />

        <table border={1}>
          <tr>
            <th colSpan={2}>{t.parentStructureHeading}</th>
          </tr>
          <tr>
            <td>01. {t.parentNone}</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="family_structure"
                  value="no"
                  checked={formData?.property?.family_structure === "no"}
                  onChange={handlePropertyChange}
                />{" "}
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>02. {t.parentMother}</td>
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
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>03. {t.parentFather}</td>
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
                {t.selectText}
              </label>
            </td>
          </tr>
          <tr>
            <td>04. {t.parentGuardian}</td>
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
                {t.selectText}
              </label>
            </td>
          </tr>
        </table>

        <br />
      </div>
    </div>
  );
}

export default claimsApply4;
