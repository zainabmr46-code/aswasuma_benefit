import React from "react";

import languages from "../../../language";

function claimsApply2({ formData, handlePropertyChange, handleChange, t }) {
  return (
    <>
      <div className="steps">
        <div className="col">
          <table border={1}>
            <p className="note">{t.clickRelevantAnswer}</p>

            <table border={1}>
              <h3>{t.section2Title}</h3>
              <div className="question">
                <label htmlFor="land">{t.q2_1}</label>

                <div className="option">
                  <label htmlFor="option">
                    <input
                      type="radio"
                      name="landOwner"
                      value="Yes"
                      checked={formData?.property?.landOwner === "Yes"}
                      onChange={handlePropertyChange}
                    />
                    {t.yes}
                  </label>
                  <label htmlFor="option">
                    <input
                      type="radio"
                      name="landOwner"
                      value="No"
                      checked={formData?.property?.landOwner === "No"}
                      onChange={handlePropertyChange}
                    />
                    {t.no}
                  </label>
                </div>

                <div className="question">
                  <label htmlFor="landSelect">{t.ifYesSelectExtent}</label>
                  <div className="option">
                    <label htmlFor="option">
                      <input
                        type="radio"
                        name="landExtend"
                        value="less"
                        checked={formData?.property?.landExtend === "less"}
                        onChange={handlePropertyChange}
                      />
                      {t.lessThanHalfAcre}
                    </label>
                    <label htmlFor="option">
                      <input
                        type="radio"
                        name="landExtend"
                        value="more"
                        checked={formData?.property?.landExtend === "more"}
                        onChange={handlePropertyChange}
                      />
                      {t.halfAcreOrMore}
                    </label>
                  </div>
                </div>
              </div>

              <div className="question">
                <label htmlFor="">{t.q2_2}</label>
                <div className="option">
                  <label htmlFor="option">
                    <input
                      type="radio"
                      name="landOwner1"
                      value="Yes"
                      checked={formData?.property?.landOwner1 === "Yes"}
                      onChange={handlePropertyChange}
                    />
                    {t.yes}
                  </label>
                  <label htmlFor="option">
                    <input
                      type="radio"
                      name="landOwner1"
                      value="No"
                      checked={formData?.property?.landOwner1 === "No"}
                      onChange={handlePropertyChange}
                    />
                    {t.no}
                  </label>
                </div>

                <div className="question">
                  <label htmlFor="landSelect">{t.ifYesSelectExtent}</label>
                  <div className="option">
                    <label htmlFor="option">
                      <input
                        type="radio"
                        name="landExtend1"
                        value="less"
                        checked={formData?.property?.landExtend1 === "less"}
                        onChange={handlePropertyChange}
                      />
                      {t.lessThanHalfAcre}
                    </label>
                    <label htmlFor="option">
                      <input
                        type="radio"
                        name="landExtend1"
                        value="more"
                        checked={formData?.property?.landExtend1 === "more"}
                        onChange={handlePropertyChange}
                      />
                      {t.halfAcreOrMore}
                    </label>
                  </div>
                </div>
              </div>
            </table>

            <table border={1}>
              <h3>{t.section3Title}</h3>
              <div className="question">
                <table border={1}>
                  <tr>
                    <th colSpan={3}>{t.vehiclesHeading}</th>
                  </tr>
                  <tr>
                    <th>{t.subNumber}</th>
                    <th>{t.vehicleType}</th>
                    <th>{t.yesNoHeader}</th>
                  </tr>
                  <tr>
                    <td>01</td>
                    <td>{t.motorbikeLabel}</td>
                    <td>
                      <div className="option">
                        <label>
                          <input
                            type="radio"
                            name="motorbike"
                            value="Yes"
                            checked={formData?.property?.motorbike === "Yes"}
                            onChange={handlePropertyChange}
                          />
                          {t.yes}
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="motorbike"
                            value="No"
                            checked={formData?.property?.motorbike === "No"}
                            onChange={handlePropertyChange}
                          />{" "}
                          {t.no}
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>02</td>
                    <td>{t.scooterLabel}</td>
                    <td>
                      <div className="option">
                        <label>
                          <input
                            type="radio"
                            name="scooter"
                            value="Yes"
                            checked={formData?.property?.scooter === "Yes"}
                            onChange={handlePropertyChange}
                          />{" "}
                          {t.yes}
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="scooter"
                            value="No"
                            checked={formData?.property?.scooter === "No"}
                            onChange={handlePropertyChange}
                          />{" "}
                          {t.no}
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>03</td>
                    <td>{t.threeWheelerLabel}</td>
                    <td>
                      <div className="option">
                        <label>
                          <input
                            type="radio"
                            name="three_wheeler"
                            value="Yes"
                            checked={
                              formData?.property?.three_wheeler === "Yes"
                            }
                            onChange={handlePropertyChange}
                          />
                          {t.yes}
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="three_wheeler"
                            value="No"
                            checked={formData?.property?.three_wheeler === "No"}
                            onChange={handlePropertyChange}
                          />{" "}
                          {t.no}
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>04</td>
                    <td>{t.motorCarLabel}</td>
                    <td>
                      <div className="option">
                        <label>
                          <input
                            type="radio"
                            name="motor_car"
                            value="Yes"
                            checked={formData?.property?.motor_car === "Yes"}
                            onChange={handlePropertyChange}
                          />
                          {t.yes}
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="motor_car"
                            value="No"
                            checked={formData?.property?.motor_car === "No"}
                            onChange={handlePropertyChange}
                          />
                          {t.no}
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>05</td>
                    <td>{t.vanJeepLabel}</td>
                    <td>
                      <div className="option">
                        <label>
                          <input
                            type="radio"
                            name="van_jeep"
                            value="Yes"
                            checked={formData?.property?.van_jeep === "Yes"}
                            onChange={handlePropertyChange}
                          />{" "}
                          {t.yes}
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="van_jeep"
                            value="No"
                            checked={formData?.property?.van_jeep === "No"}
                            onChange={handlePropertyChange}
                          />
                          {t.no}
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>06</td>
                    <td>{t.busLabel}</td>
                    <td>
                      <div className="option">
                        <label>
                          <input
                            type="radio"
                            name="bus"
                            value="Yes"
                            checked={formData?.property?.bus === "Yes"}
                            onChange={handlePropertyChange}
                          />{" "}
                          {t.yes}
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="bus"
                            value="No"
                            checked={formData?.property?.bus === "No"}
                            onChange={handlePropertyChange}
                          />{" "}
                          {t.no}
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>07</td>
                    <td>{t.lorryTipperLabel}</td>
                    <td>
                      <div className="option">
                        <label>
                          <input
                            type="radio"
                            name="lorry_tipper"
                            value="Yes"
                            checked={formData?.property?.lorry_tipper === "Yes"}
                            onChange={handlePropertyChange}
                          />
                          {t.yes}
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="lorry_tipper"
                            value="No"
                            checked={formData?.property?.lorry_tipper === "No"}
                            onChange={handlePropertyChange}
                          />
                          {t.no}
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>08</td>
                    <td>{t.handTractorLabel}</td>
                    <td>
                      <div className="option">
                        <label>
                          <input
                            type="radio"
                            name="hand_tractor"
                            value="Yes"
                            checked={formData?.property?.hand_tractor === "Yes"}
                            onChange={handlePropertyChange}
                          />
                          {t.yes}
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="hand_tractor"
                            value="No"
                            checked={formData?.property?.hand_tractor === "No"}
                            onChange={handlePropertyChange}
                          />
                          {t.no}
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>09</td>
                    <td>{t.tractorLabel}</td>
                    <td>
                      <div className="option">
                        <label>
                          <input
                            type="radio"
                            name="tractor"
                            value="Yes"
                            checked={formData?.property?.tractor === "Yes"}
                            onChange={handlePropertyChange}
                          />{" "}
                          {t.yes}
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="tractor"
                            value="No"
                            checked={formData?.property?.tractor === "No"}
                            onChange={handlePropertyChange}
                          />{" "}
                          {t.no}
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>{t.noneVehiclesLabel}</td>
                    <td>
                      <div className="option">
                        <label>
                          <input
                            type="radio"
                            name="none"
                            value="Yes"
                            checked={formData?.property?.none === "Yes"}
                            onChange={handlePropertyChange}
                          />{" "}
                          {t.yes}
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="none"
                            value="No"
                            checked={formData?.property?.none === "No"}
                            onChange={handlePropertyChange}
                          />{" "}
                          {t.no}
                        </label>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>

              <table border={1}>
                <tr>
                  <th colSpan={3}>{t.machineryHeading}</th>
                </tr>
                <tr>
                  <th>{t.subNumber}</th>
                  <th>{t.machineryHeader}</th>
                  <th>{t.selectionHeader}</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>{t.mechBoatLabel}</td>
                  <td>
                    <div className="option">
                      <label>
                        <input
                          type="radio"
                          name="mechanized_fishing_boat"
                          value="Yes"
                          checked={
                            formData?.property?.mechanized_fishing_boat ===
                            "Yes"
                          }
                          onChange={handlePropertyChange}
                        />
                        {t.yes}
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="mechanized_fishing_boat"
                          value="No"
                          checked={
                            formData?.property?.mechanized_fishing_boat === "No"
                          }
                          onChange={handlePropertyChange}
                        />
                        {t.no}
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>{t.nonMechBoatLabel}</td>
                  <td>
                    <div className="option">
                      <label>
                        <input
                          type="radio"
                          name="non_mechanized_fishing_boat"
                          value="Yes"
                          checked={
                            formData?.property?.non_mechanized_fishing_boat ===
                            "Yes"
                          }
                          onChange={handlePropertyChange}
                        />
                        {t.yes}
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="non_mechanized_fishing_boat"
                          value="No"
                          checked={
                            formData?.property?.non_mechanized_fishing_boat ===
                            "No"
                          }
                          onChange={handlePropertyChange}
                        />
                        {t.no}
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>{t.combineHarvesterLabel}</td>
                  <td>
                    <div className="option">
                      <label htmlFor="machinery_03_yes">
                        <input
                          type="radio"
                          name="combine_harvester"
                          value="Yes"
                          checked={
                            formData?.property?.combine_harvester === "Yes"
                          }
                          onChange={handlePropertyChange}
                        />
                        {t.yes}
                      </label>
                      <label htmlFor="machinery_03_no">
                        <input
                          type="radio"
                          name="combine_harvester"
                          value="No"
                          checked={
                            formData?.property?.combine_harvester === "No"
                          }
                          onChange={handlePropertyChange}
                        />
                        {t.no}
                      </label>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>4</td>
                  <td>{t.paddyCutterLabel}</td>
                  <td>
                    <div className="option">
                      <label htmlFor="machinery_04_yes">
                        <input
                          type="radio"
                          name="paddy_machine"
                          value="Yes"
                          checked={formData?.property?.paddy_machine === "Yes"}
                          onChange={handlePropertyChange}
                        />
                        {t.yes}
                      </label>
                      <label htmlFor="machinery_04_no">
                        <input
                          type="radio"
                          name="paddy_machine"
                          value="No"
                          checked={formData?.property?.paddy_machine === "No"}
                          onChange={handlePropertyChange}
                        />
                        {t.no}
                      </label>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>5</td>
                  <td>{t.otherFishingAgriLabel}</td>
                  <td>
                    <div className="option">
                      <label htmlFor="machinery_05_yes">
                        <input
                          type="radio"
                          name="other_fishing_agri_equipment"
                          value="Yes"
                          checked={
                            formData?.property?.other_fishing_agri_equipment ===
                            "Yes"
                          }
                          onChange={handlePropertyChange}
                        />
                        {t.yes}
                      </label>
                      <label htmlFor="machinery_05_no">
                        <input
                          type="radio"
                          name="other_fishing_agri_equipment"
                          value="No"
                          checked={
                            formData?.property?.other_fishing_agri_equipment ===
                            "No"
                          }
                          onChange={handlePropertyChange}
                        />
                        {t.no}
                      </label>
                    </div>
                  </td>
                </tr>

                

                <tr>
                  <td>6</td>
                  <td>{t.otherSelfEmpLabel}</td>
                  <td>
                    <div className="option">
                      <label htmlFor="machinery_06_yes">
                        <input
                          type="radio"
                          name="self_employment_equipment"
                          value="Yes"
                          checked={
                            formData?.property?.self_employment_equipment ===
                            "Yes"
                          }
                          onChange={handlePropertyChange}
                        />
                        {t.yes}
                      </label>
                      <label htmlFor="machinery_06_no">
                        <input
                          type="radio"
                          name="self_employment_equipment"
                          value="No"
                          checked={
                            formData?.property?.self_employment_equipment ===
                            "No"
                          }
                          onChange={handlePropertyChange}
                        />
                        {t.no}
                      </label>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>7</td>
                  <td>{t.noneMachineryLabel}</td>
                  <td>
                    <div className="option">
                      <label htmlFor="machinery_07_yes">
                        <input
                          type="radio"
                          name="none01"
                          value="Yes"
                          checked={formData?.property?.none01 === "Yes"}
                          onChange={handlePropertyChange}
                        />
                        {t.yes}
                      </label>
                      <label htmlFor="machinery_07_no">
                        <input
                          type="radio"
                          name="none01"
                          value="No"
                          checked={formData?.property?.none01 === "No"}
                          onChange={handlePropertyChange}
                        />
                        {t.no}
                      </label>
                    </div>
                  </td>
                </tr>
              </table>

              <table border={1}>
                                <tr>
                  <th colSpan={3}>{t.livestockHeading}</th>
                </tr>
                <tr>
                  <th>{t.subNumber}</th>
                  <th>{t.animalTypeHeader}</th>
                  <th>{t.quantitySelectionHeader}</th>
                </tr>

                <tr>
                  <td>1</td>
                  <td>{t.cattleLabel}</td>
                  <td>
                    <div className="option">
                      <label htmlFor="livestock_01_qty">
                        {t.quantityPlaceholder}
                        <input
                          type="number"
                          name="livestock_01_qty"
                          placeholder="0"
                          value={formData?.property?.livestock_01_qty ?? 0}
                          onChange={handlePropertyChange}
                        />
                      </label>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>{t.goatLabel}</td>
                  <td>
                    <div className="option">
                      <label htmlFor="livestock_02_qty">
                        {t.quantityPlaceholder}
                        <input
                          type="number"
                          name="livestock_02_qty"
                          placeholder="0"
                          value={formData?.property?.livestock_02_qty ?? 0}
                          onChange={handlePropertyChange}
                        />
                      </label>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>{t.pigLabel}</td>
                  <td>
                    <div className="option">
                      <label htmlFor="livestock_03_qty">
                        {t.quantityPlaceholder}
                        <input
                          type="number"
                          name="livestock_03_qty"
                          placeholder="0"
                          value={formData?.property?.livestock_03_qty ?? 0}
                          onChange={handlePropertyChange}
                        />
                      </label>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>4</td>
                  <td>{t.chickenLabel}</td>
                  <td>
                    <div className="option">
                      <label htmlFor="livestock_04_qty">
                        {t.quantityPlaceholder}
                        <input
                          type="number"
                          name="livestock_04_qty"
                          placeholder="0"
                          value={formData?.property?.livestock_04_qty ?? 0}
                          onChange={handlePropertyChange}
                        />
                      </label>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>5</td>
                  <td>{t.duckLabel}</td>
                  <td>
                    <div className="option">
                      <label htmlFor="livestock_05_qty">
                        {t.quantityPlaceholder}
                        <input
                          type="number"
                          name="livestock_05_qty"
                          placeholder="0"
                          value={formData?.property?.livestock_05_qty ?? 0}
                          onChange={handlePropertyChange}
                        />
                      </label>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>6</td>
                  <td>{t.noneLivestockLabel}</td>
                  <td>
                    <div className="option">
                      <label htmlFor="livestock_06_yes">
                        <input
                          type="radio"
                          name="livestock_06_qty"
                          value={formData?.property?.livestock_06_qty === "Yes"}
                          onChange={handlePropertyChange}
                        />
                        {t.selectText}
                      </label>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>7</td>
                  <td>{t.otherLabel}</td>
                  <td>
                    <div className="option">
                      <label htmlFor="text">
                        {t.animalPlaceholder}
                        <input
                          type="text"
                          id=""
                          name="animal"
                          value={formData?.property?.animal ?? ""}
                          onChange={handlePropertyChange}
                        />
                      </label>
                      <br/>
                      <label htmlFor="livestock_07_qty">
                        {t.quantityPlaceholder}
                        <input
                          type="number"
                          name="livestock_07_qty"
                          placeholder="0"
                          value={formData?.property?.livestock_07_qty ?? 0}
                          onChange={handlePropertyChange}
                        />
                      </label>
                    </div>
                  </td>
                </tr>

              </table>
            </table>
          </table>
        </div>

        <div className="col">
          <div className="two-col">
            <table border={1}>
                           <tr>
                <th>{t.expenditureHeader}</th>
                <th>{t.expenditureRsHeader}</th>
              </tr>
              <tr>
                <td>{t.expFood}</td>
                <td>
                  <input
                    type="number"
                    name="food_drinks"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.food_drinks ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>{t.expWater}</td>
                <td>
                  <input
                    type="number"
                    name="drinking_water"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.drinking_water ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>{t.expClothes}</td>
                <td>
                  <input
                    type="number"
                    name="clothes"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.clothes ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>{t.expMedicine}</td>
                <td>
                  <input
                    type="number"
                    name="medicine"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.medicine ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>{t.expHousing}</td>
                <td>
                  <input
                    type="number"
                    name="housing_rent"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.housing_rent ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>{t.expPersonalTransport}</td>
                <td>
                  <input
                    type="number"
                    name="personal_transport"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.personal_transport ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>{t.expPublicTransport}</td>
                <td>
                  <input
                    type="number"
                    name="public_transport"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.public_transport ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>{t.expLighting}</td>
                <td>
                  <input
                    type="number"
                    name="electricity"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.electricity ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>{t.expGasKerosene}</td>
                <td>
                  <input
                    type="number"
                    name="cooking"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.cooking ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>{t.expCommunication}</td>
                <td>
                  <input
                    type="number"
                    name="communication"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.communication ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>

                            <tr>
                <td>{t.expEducation}</td>
                <td>
                  <input
                    type="number"
                    name="education"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.education ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>{t.expSportsReligion}</td>
                <td>
                  <input
                    type="number"
                    name="entertainment"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.entertainment ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  {t.expOtherLoans}
                </td>
                <td>
                  <input
                    type="number"
                    name="other_expenses"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.other_expenses ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <strong>{t.totalLabel}</strong>
                </td>
                <td>
                  <input
                    type="number"
                    name="expense_total"
                    placeholder="0"
                    value={formData.expense_total ?? ""}
                    readOnly
                  />
                </td>
              </tr>

            </table>

            <br />

            <table border={1}>
                           <tr>
                <th colSpan={2}>{t.incomeHeading}</th>
              </tr>
              <tr>
                <th>{t.incomeSourceHeader}</th>
                <th>{t.incomeRsHeader}</th>
              </tr>
              <tr>
                <td>{t.incNonAgri}</td>
                <td>
                  <input
                    type="number"
                    name="inc_non_agri"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.inc_non_agri ?? 0}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>{t.incSalary}</td>
                <td>
                  <input
                    type="number"
                    name="salary_income"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.salary_income ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>{t.incEconomic}</td>
                <td>
                  <input
                    type="number"
                    name="economic_income"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.economic_income ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>{t.incAgri}</td>
                <td>
                  <input
                    type="number"
                    name="agricultural_income"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.agricultural_income ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>{t.incRentals}</td>
                <td>
                  <input
                    type="number"
                    name="inc_rentals"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.inc_rentals ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>{t.incPension}</td>
                <td>
                  <input
                    type="number"
                    name="pension"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.pension ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>{t.incSamurdhi}</td>
                <td>
                  <input
                    type="number"
                    name="samurdhi"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.samurdhi ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>{t.incElders}</td>
                <td>
                  <input
                    type="number"
                    name="inc_elders_allowance"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.inc_elders_allowance ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>{t.incDisability}</td>
                <td>
                  <input
                    type="number"
                    name="inc_disability_allowance"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.inc_disability_allowance ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>{t.incChronic}</td>
                <td>
                  <input
                    type="number"
                    name="inc_illness_allowance"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.inc_illness_allowance ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>

                            <tr>
                <td>{t.incInterests}</td>
                <td>
                  <input
                    type="number"
                    name="inc_interests"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.inc_interests ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  {t.incForeignRemittance}
                </td>
                <td>
                  <input
                    type="number"
                    name="inc_foreign_remittance"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.inc_foreign_remittance ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  {t.incLocalSources}
                </td>
                <td>
                  <input
                    type="number"
                    name="inc_local_sources"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.inc_local_sources ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>{t.incGovRelief}</td>
                <td>
                  <input
                    type="number"
                    name="inc_gov_relief"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.inc_gov_relief ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>{t.incOther}</td>
                <td>
                  <input
                    type="number"
                    name="other_income"
                    min="0"
                    placeholder={t.enterAmount}
                    value={formData.other_income ?? ""}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <strong>{t.totalLabel}</strong>
                </td>
                <td>
                  <input
                    type="number"
                    name="income_total"
                    min="0"
                    placeholder="0"
                    value={formData.income_total}
                    readOnly
                  />
                </td>
              </tr>
            </table>

            <br />
          </div>

          <table border={1}>
            <tr>
              <td>
                <strong>
                  {t.electricityUnitsLabel}
                </strong>
              </td>
              <td>
                <input
                  type="number"
                  name="electricity_units"
                  min="0"
                  placeholder="0"
                  value={formData.electricity_units}
                  onChange={handleChange}
                />
              </td>
            </tr>

          </table>
        </div>
      </div>
    </>
  );
}

export default claimsApply2;
