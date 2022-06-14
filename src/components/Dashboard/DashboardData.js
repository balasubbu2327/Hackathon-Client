import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCurrencyFormatter from "../../hooks/useCurrencyFormatter";

import { fetchAccountStatsAction } from "../../redux/slices/accountStats/accountStatsSlices";
import DataGrap from "./DataGrap";

const DashboardData = ({
  avgExp,
  totalExp,
  minExp,
  maxExp,
  numOfTransExp,
  avgInc,
  totalInc,
  minInc,
  maxInc,
  numOfTransInc,
  netProfit,
}) => {
  const dispatch = useDispatch();
  //format curr
  const formattedTotalExp = useCurrencyFormatter("USD", totalExp);
  const formattedTotalInc = useCurrencyFormatter("USD", totalInc);
  const formattedNetProfit = useCurrencyFormatter("USD", netProfit);
  //format date
  return (
    <section Name="py-6">
      <div Name="container">
        {/* Grpah */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          {/* Grpah */}
          <DataGrap income={totalInc} expenses={totalExp} />
        </div>
        {/* Net Profit */}
        <div style={{ textAlign: "center", margin: "20px" }}>
          <h2 className="text-success">Net Profit : {formattedNetProfit}</h2>
        </div>
        <div Name="row">
          <div Name="col-12 col-md-6 mb-6">
            <div Name="p-8 border rounded-2">
              <div Name="d-flex mb-6 align-items-start justify-content-between">
                <span
                  Name="d-inline-flex align-items-center justify-content-center bg-light-light rounded-2"
                  style={{ width: "40px", height: "40px" }}
                ></span>
                {/* Expenses Start */}
                <span Name="badge fs-2 bg-light text-danger">
                  Total Expenses
                </span>
              </div>
              <h1 Name="mb-4">{formattedTotalExp}</h1>
              <p Name="mb-0">
                <span>Number of Transactions</span>
                <span Name="text-danger ms-1">
                  <span>{numOfTransExp}</span>
                </span>
              </p>

              <p Name="mb-0">
                <span>Minimum Transactions</span>
                <span Name="text-danger ms-1">
                  <span>{minExp}</span>
                </span>
              </p>

              <p Name="mb-0">
                <span>Maximum Transactions</span>
                <span Name="text-danger ms-1">
                  <span>{maxExp}</span>
                </span>
              </p>

              <p Name="mb-0">
                <span>Average Transactions</span>
                <span Name="text-danger ms-1">
                  <span>{avgExp}</span>
                </span>
              </p>
            </div>
          </div>
          <div Name="col-12 col-md-6 mb-6">
            <div Name="p-8 border rounded-2">
              <div Name="d-flex mb-6 align-items-start justify-content-between">
                <span
                  Name="d-inline-flex align-items-center justify-content-center bg-danger-light rounded-2"
                  style={{ width: "40px", height: "40px" }}
                ></span>

                {/* Income Start */}
                <span Name="badge fs-2 bg-primary-light text-primary">
                  Total Income
                </span>
              </div>
              <h1 Name="mb-4">{formattedTotalInc}</h1>

              <p Name="mb-0">
                <span>Number of Transactions</span>
                <span Name="text-danger ms-1">
                  <span>{numOfTransInc}</span>
                </span>
              </p>

              <p Name="mb-0">
                <span>Minimum Transactions</span>
                <span Name="text-danger ms-1">
                  <span>{minInc}</span>
                </span>
              </p>

              <p Name="mb-0">
                <span>Maximum Transactions</span>
                <span Name="text-danger ms-1">
                  <span>{maxInc}</span>
                </span>
              </p>

              <p Name="mb-0">
                <span>Average Transactions</span>
                <span Name="text-danger ms-1">
                  <span>{avgInc}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardData;
