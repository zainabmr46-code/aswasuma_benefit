import React, { useEffect } from "react";

function ApplyAdd2({ formData, handlePropertyChange, handleChange, t}) {
  return (
    <div className="steps">
      <div className="col">
        <p className="note">{t.clickRelevantAnswer}</p>

        <div className="section">
          <h3>Section 02. Land and Building Asset Information</h3>
          <table border={1}>
            <div className="question">
              <label htmlFor="land">
                2.1 Do you or your family members own highland (dry land) or
                similar assets?
              </label>

              <div className="option">
                <label htmlFor="option">
                  <input
                    type="radio"
                    name="landOwner"
                    value="Yes"
                    checked={formData?.property?.landOwner === "Yes"}
                    onChange={handlePropertyChange}
                  />
                  Yes
                </label>
                <label htmlFor="option">
                  <input
                    type="radio"
                    name="landOwner"
                    value="No"
                    checked={formData?.property?.landOwner === "No"}
                    onChange={handlePropertyChange}
                  />
                  No
                </label>
              </div>

              <div className="question">
                <label htmlFor="landSelect">
                  - If Yes, please select the land extent:
                </label>

                <div className="option">
                  <label htmlFor="option">
                    <input
                      type="radio"
                      name="landExtend"
                      value="less"
                      checked={formData?.property?.landExtend === "less"}
                      onChange={handlePropertyChange}
                    />
                    Less than 1/2 Acre
                  </label>
                  <label htmlFor="option">
                    <input
                      type="radio"
                      name="landExtend"
                      value="more"
                      checked={formData?.property?.landExtend === "more"}
                      onChange={handlePropertyChange}
                    />
                    1/2 Acre or More
                  </label>
                </div>
              </div>
            </div>

            <div className="question">
              <label htmlFor="">
                2.2 Do you or your family members own paddy land (wet land) or
                similar assets?
              </label>

              <div className="option">
                <label htmlFor="option">
                  <input
                    type="radio"
                    name="landOwner1"
                    value="Yes"
                    checked={formData?.property?.landOwner1 === "Yes"}
                    onChange={handlePropertyChange}
                  />
                  Yes
                </label>
                <label htmlFor="option">
                  <input
                    type="radio"
                    name="landOwner1"
                    value="No"
                    checked={formData?.property?.landOwner1 === "No"}
                    onChange={handlePropertyChange}
                  />
                  No
                </label>
              </div>

              <div className="question">
                <label htmlFor="landSelect">
                  - If Yes, please select the land extent:
                </label>

                <div className="option">
                  <label htmlFor="option">
                    <input
                      type="radio"
                      name="landExtend1"
                      value="less"
                      checked={formData?.property?.landExtend1 === "less"}
                      onChange={handlePropertyChange}
                    />
                    Less than 1/2 Acre
                  </label>
                  <label htmlFor="option">
                    <input
                      type="radio"
                      name="landExtend1"
                      value="more"
                      checked={formData?.property?.landExtend1 === "more"}
                      onChange={handlePropertyChange}
                    />
                    1/2 Acre or More
                  </label>
                </div>
              </div>
            </div>
          </table>
        </div>

        <div className="section">
            <h3>Section 03. Other assets owned by you/your family members</h3>
          <table border={1}>
        
              <tr>
                <th colSpan={3}>3.1 Vehicles</th>
              </tr>

              <tr>
                <th>Sub Number</th>
                <th> Vehicle Type</th>
                <th>Yes/No</th>
              </tr>
              <tr>
                <td>01</td>
                <td>
                  Motorbikes <br /> (Engine capacity CC 125 or more)
                </td>
                <td>
                  <div className="option">
                    <label htmlFor="option">
                      <input
                        type="radio"
                        name="motorbike"
                        value="Yes"
                        checked={formData?.property?.motorbike === "Yes"}
                        onChange={handlePropertyChange}
                      />
                      Yes
                    </label>
                    <label for="">
                      <input
                        type="radio"
                        name="motorbike"
                        value="No"
                        checked={formData?.property?.motorbike === "No"}
                        onChange={handlePropertyChange}
                      />
                      No
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>02</td>
                <td>
                  {" "}
                  Scooters <br /> (Engine capacity CC 125 or more)
                </td>
                <td>
                  <div className="option">
                    <label htmlFor="option">
                      <input
                        type="radio"
                        name="scooter"
                        value="Yes"
                        checked={formData?.property?.scooter === "Yes"}
                        onChange={handlePropertyChange}
                      />
                      Yes
                    </label>

                    <label for="">
                      <input
                        type="radio"
                        name="scooter"
                        value="No"
                        checked={formData?.property?.scooter === "No"}
                        onChange={handlePropertyChange}
                      />
                      No
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>03</td>
                <td>Three-wheelers</td>
                <td>
                  <div className="option">
                    <label htmlFor="option">
                      <input
                        type="radio"
                        name="three_wheeler"
                        value="Yes"
                        checked={formData?.property?.three_wheeler === "Yes"}
                        onChange={handlePropertyChange}
                      />
                      Yes
                    </label>
                    <label for="">
                      <input
                        type="radio"
                        name="three_wheeler"
                        value="No"
                        checked={formData?.property?.three_wheeler === "No"}
                        onChange={handlePropertyChange}
                      />
                      No
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>04</td>
                <td>Motor cars</td>
                <td>
                  <div className="option">
                    <label htmlFor="option">
                      <input
                        type="radio"
                        name="motor_car"
                        value="Yes"
                        checked={formData?.property?.motor_car === "Yes"}
                        onChange={handlePropertyChange}
                      />
                      Yes
                    </label>
                    <label for="">
                      <input
                        type="radio"
                        name="motor_car"
                        value="No"
                        checked={formData?.property?.motor_car === "No"}
                        onChange={handlePropertyChange}
                      />
                      No
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>05</td>
                <td>Vans/Jeeps</td>
                <td>
                  <div className="option">
                    <label htmlFor="option">
                      <input
                        type="radio"
                        name="van_jeep"
                        value="Yes"
                        checked={formData?.property?.van_jeep === "Yes"}
                        onChange={handlePropertyChange}
                      />
                      Yes
                    </label>
                    <label for="">
                      <input
                        type="radio"
                        name="van_jeep"
                        value="No"
                        checked={formData?.property?.van_jeep === "No"}
                        onChange={handlePropertyChange}
                      />
                      No
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>06</td>
                <td>Buses</td>
                <td>
                  <div className="option">
                    <label htmlFor="option">
                      <input
                        type="radio"
                        name="bus"
                        value="Yes"
                        checked={formData?.property?.bus === "Yes"}
                        onChange={handlePropertyChange}
                      />
                      Yes
                    </label>
                    <label for="">
                      <input
                        type="radio"
                        name="bus"
                        value="No"
                        checked={formData?.property?.bus === "No"}
                        onChange={handlePropertyChange}
                      />
                      No
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>07</td>
                <td> Lorries/Tippers</td>
                <td>
                  <div className="option">
                    <label htmlFor="option">
                      <input
                        type="radio"
                        name="lorry_tipper"
                        value="Yes"
                        checked={formData?.property?.lorry_tipper === "Yes"}
                        onChange={handlePropertyChange}
                      />
                      Yes
                    </label>
                    <label for="">
                      <input
                        type="radio"
                        name="lorry_tipper"
                        value="No"
                        checked={formData?.property?.lorry_tipper === "No"}
                        onChange={handlePropertyChange}
                      />
                      No
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>08</td>
                <td> Hand tractors (2-wheel)</td>
                <td>
                  <div className="option">
                    <label htmlFor="option">
                      <input
                        type="radio"
                        name="hand_tractor"
                        value="Yes"
                        checked={formData?.property?.hand_tractor === "Yes"}
                        onChange={handlePropertyChange}
                      />
                      Yes
                    </label>
                    <label for="">
                      <input
                        type="radio"
                        name="hand_tractor"
                        value="No"
                        checked={formData?.property?.hand_tractor === "No"}
                        onChange={handlePropertyChange}
                      />
                      No
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>09</td>
                <td>Tractors (4-wheel)</td>
                <td>
                  <div className="option">
                    <label htmlFor="option">
                      <input
                        type="radio"
                        name="tractor"
                        value="Yes"
                        checked={formData?.property?.tractor === "Yes"}
                        onChange={handlePropertyChange}
                      />
                      Yes
                    </label>
                    <label for="">
                      <input
                        type="radio"
                        name="tractor"
                        value="No"
                        checked={formData?.property?.tractor === "No"}
                        onChange={handlePropertyChange}
                      />
                      No
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>None of the above vehicles owned</td>
                <td>
                  <div className="option">
                    <label htmlFor="option">
                      <input
                        type="radio"
                        name="none"
                        value="Yes"
                        checked={formData?.property?.none === "Yes"}
                        onChange={handlePropertyChange}
                      />
                      Yes
                    </label>
                    <label for="">
                      <input
                        type="radio"
                        name="none"
                        value="No"
                        checked={formData?.property?.none === "No"}
                        onChange={handlePropertyChange}
                      />
                      No
                    </label>
                  </div>
                </td>
              </tr>
            
          </table>
          <br />
          
          <div className="section">
            <table border={1}>
              <tr>
                <th colSpan={3}>
                  3.2: Machinery and Equipment - For Economic Activities
                </th>
              </tr>
              <tr>
                <th>Sub Number</th>
                <th> Machinery and Equipment</th>
                <th>Selection</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Mechanized fishing boats</td>
                <td>
                  <div className="option">
                    <label htmlFor="machinery_01_yes">
                      <input
                        type="radio"
                        name="mechanized_fishing_boat"
                        value="Yes"
                        checked={
                          formData?.property?.mechanized_fishing_boat === "Yes"
                        }
                        onChange={handlePropertyChange}
                      />
                      Yes
                    </label>
                    <label for="">
                      <input
                        type="radio"
                        name="mechanized_fishing_boat"
                        value="No"
                        checked={
                          formData?.property?.mechanized_fishing_boat === "No"
                        }
                        onChange={handlePropertyChange}
                      />
                      No
                    </label>
                  </div>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>Non-mechanized fishing boats</td>
                <td>
                  <div className="option">
                    <label htmlFor="machinery_02_yes">
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
                      Yes
                    </label>
                    <label for="">
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
                      No
                    </label>
                  </div>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>Combine harvesters</td>
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
                      Yes
                    </label>
                    <label for="">
                      <input
                        type="radio"
                        name="combine_harvester"
                        value="No"
                        checked={formData?.property?.combine_harvester === "No"}
                        onChange={handlePropertyChange}
                      />
                      No
                    </label>
                  </div>
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td>Paddy cutting/threshing machines</td>
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
                      Yes
                    </label>
                    <label for="">
                      <input
                        type="radio"
                        name="paddy_machine"
                        value="No"
                        checked={formData?.property?.paddy_machine === "No"}
                        onChange={handlePropertyChange}
                      />
                      No
                    </label>
                  </div>
                </td>
              </tr>

              <tr>
                <td>5</td>
                <td>Other fishing/agricultural equipment</td>
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
                      Yes
                    </label>
                    <label for="">
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
                      No
                    </label>
                  </div>
                </td>
              </tr>

              <tr>
                <td>6</td>
                <td>Other self-employment equipment</td>
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
                      Yes
                    </label>
                    <label for="">
                      <input
                        type="radio"
                        name="self_employment_equipment"
                        value="No"
                        checked={
                          formData?.property?.self_employment_equipment === "No"
                        }
                        onChange={handlePropertyChange}
                      />
                      No
                    </label>
                  </div>
                </td>
              </tr>

              <tr>
                <td>7</td>
                <td>Do not own any of the machinery mentioned above</td>
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
                      Yes
                    </label>
                    <label for="">
                      <input
                        type="radio"
                        name="none01"
                        value="No"
                        checked={formData?.property?.none01 === "No"}
                        onChange={handlePropertyChange}
                      />
                      No
                    </label>
                  </div>
                </td>
              </tr>
            </table>
          </div>

          <div className="section">
            <table border={1}>
              <tr>
                <th colSpan={3}>3.3: Livestock / Aquaculture Information</th>
              </tr>
              <tr>
                <th>Sub Number</th>
                <th>Animal Type</th>
                <th>Number (Quantity) / Selection</th>
              </tr>

              <tr>
                <td>1</td>
                <td>Cattle / Dairy cows</td>
                <td>
                  <div className="option">
                    <input
                      type="number"
                      name="livestock_01_qty"
                      placeholder="Quantity"
                      value={formData?.property?.livestock_01_qty ?? 0}
                      onChange={handlePropertyChange}
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>Goats</td>
                <td>
                  <div className="option">
                    <input
                      type="number"
                      name="livestock_02_qty"
                      placeholder="Quantity"
                      value={formData?.property?.livestock_02_qty ?? 0}
                      onChange={handlePropertyChange}
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>Pigs</td>
                <td>
                  <div className="option">
                    <input
                      type="number"
                      name="livestock_03_qty"
                      placeholder="Quantity"
                      value={formData?.property?.livestock_03_qty ?? 0}
                      onChange={handlePropertyChange}
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td>Chickens</td>
                <td>
                  <div className="option">
                    <input
                      type="number"
                      name="livestock_04_qty"
                      placeholder="Quantity"
                      value={formData?.property?.livestock_04_qty ?? 0}
                      onChange={handlePropertyChange}
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td>5</td>
                <td>Ducks</td>
                <td>
                  <div className="option">
                    <input
                      type="number"
                      name="livestock_05_qty"
                      placeholder="Quantity"
                      value={formData?.property?.livestock_05_qty ?? 0}
                      onChange={handlePropertyChange}
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td>6</td>
                <td>None of the above livestock owned</td>
                <td>
                  <div className="option">
                    <label htmlFor="livestock_06_yes">
                      <input
                        type="radio"
                        name="livestock_06_qty"
                        value={formData?.property?.livestock_06_qty === "Yes"}
                        onChange={handlePropertyChange}
                      />
                      Select
                    </label>
                  </div>
                </td>
              </tr>

              <tr>
                <td>7</td>
                <td>Other</td>
                <td>
                  <div className="option">
                    <input
                      type="text"
                      id=""
                      name="animal"
                      placeholder="Animal"
                      value={formData?.property?.animal ?? ""}
                      onChange={handlePropertyChange}
                    />

                    <br />

                    <input
                      type="number"
                      name="livestock_07_qty"
                      placeholder="Quantity"
                      value={formData?.property?.livestock_07_qty ?? 0}
                      onChange={handlePropertyChange}
                    />
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="two-col">
          <table border={1}>
            <tr>
              <th>Monthly household expenditure of the last month</th>
              <th>Monthly Expenditure (Rs.)</th>
            </tr>
            <tr>
              <td>1. Food and drinks</td>
              <td>
                <input
                  type="number"
                  name="food_drinks"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.food_drinks ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>2. Drinking water</td>
              <td>
                <input
                  type="number"
                  name="drinking_water"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.drinking_water ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>3. Clothes and wearings</td>
              <td>
                <input
                  type="number"
                  name="clothes"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.clothes ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>4. Medicine / For health</td>
              <td>
                <input
                  type="number"
                  name="medicine"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.medicine ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>5. Housing (If living on rent)</td>
              <td>
                <input
                  type="number"
                  name="housing_rent"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.housing_rent ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>6. Personal transport</td>
              <td>
                <input
                  type="number"
                  name="personal_transport"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.personal_transport ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>7. Public transport / Travelling expenses</td>
              <td>
                <input
                  type="number"
                  name="public_transport"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.public_transport ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>8. Lighting (Electricity)</td>
              <td>
                <input
                  type="number"
                  name="electricity"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.electricity ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>9. Gas / Kerosene including cooking fuels</td>
              <td>
                <input
                  type="number"
                  name="cooking"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.cooking ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>10. Communication (Mobile and fixed line) expenses</td>
              <td>
                <input
                  type="number"
                  name="communication"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.communication ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>11. Educational activities</td>
              <td>
                <input
                  type="number"
                  name="education"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.education ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>12. Sports, entertainment, or religious activities</td>
              <td>
                <input
                  type="number"
                  name="entertainment"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.entertainment ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                13. Other expenditures (Loans / Leasing / Interests included)
              </td>
              <td>
                <input
                  type="number"
                  name="other_expenses"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.other_expenses ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
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
              <th colSpan={2}>05. Household Income of Last Month</th>
            </tr>
            <tr>
              <th>Income Source</th>
              <th>Income (Rs.)</th>
            </tr>
            <tr>
              <td>1. Non-agricultural activities</td>
              <td>
                <input
                  type="number"
                  name="inc_non_agri"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.inc_non_agri ?? 0}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>2. Salary / Wages</td>
              <td>
                <input
                  type="number"
                  name="salary_income"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.salary_income ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>3. Income generated through economic activities</td>
              <td>
                <input
                  type="number"
                  name="economic_income"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.economic_income ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>4. Agricultural activities</td>
              <td>
                <input
                  type="number"
                  name="agricultural_income"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.agricultural_income ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>5. Housing / Land rentals</td>
              <td>
                <input
                  type="number"
                  name="inc_rentals"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.inc_rentals ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>6. Retirement pension</td>
              <td>
                <input
                  type="number"
                  name="pension"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.pension ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>7. Samurdhi</td>
              <td>
                <input
                  type="number"
                  name="samurdhi"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.samurdhi ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>8. Elders allowance</td>
              <td>
                <input
                  type="number"
                  name="inc_elders_allowance"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.inc_elders_allowance ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>9. Disability allowance</td>
              <td>
                <input
                  type="number"
                  name="inc_disability_allowance"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.inc_disability_allowance ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>10. Chronic illness allowance</td>
              <td>
                <input
                  type="number"
                  name="inc_illness_allowance"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.inc_illness_allowance ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>11. Interests / Dividends</td>
              <td>
                <input
                  type="number"
                  name="inc_interests"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.inc_interests ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>12. Money and remittances received from foreign countries</td>
              <td>
                <input
                  type="number"
                  name="inc_foreign_remittance"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.inc_foreign_remittance ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                13. Money received from internal local sources including
                seasonal income
              </td>
              <td>
                <input
                  type="number"
                  name="inc_local_sources"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.inc_local_sources ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>14. Other relief provided by the Government</td>
              <td>
                <input
                  type="number"
                  name="inc_gov_relief"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.inc_gov_relief ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>15. Other</td>
              <td>
                <input
                  type="number"
                  name="other_income"
                  min="0"
                  placeholder="Enter amount"
                  value={formData.other_income ?? ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
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
                6. Electricity consumption units of last month (Kilowatt Hours)
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
  );
}

export default ApplyAdd2;
