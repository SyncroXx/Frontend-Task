/* eslint-disable max-statements */
import { add, format } from "date-fns";
import React from "react";
import { Button } from "../../components/button";
import RowContainer from "../../components/atoms/RowContainer/row-container";
import { convertDateToString } from "../../utils";
import {
  AccountHeadline,
  AccountLabel,
  AccountList,
  AccountListItem,
  AccountSection,
  InfoText,
  Inset,
  ValuationContainer,
} from "./style";
import useAccount from "../../hooks/useAccount";

const Detail = () => {
  const { account, accountInsight, isLoading } = useAccount();

  if (isLoading) {
    return "Loading...";
  }

  let mortgage;
  const lastUpdate = new Date(account.lastUpdate);
  if (account.associatedMortgages.length) {
    mortgage = account.associatedMortgages[0];
  }

  return (
    <Inset>
      <AccountSection>
        <AccountLabel>Estimated Value</AccountLabel>
        <AccountHeadline>
          {new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(account.recentValuation.amount)}
        </AccountHeadline>
        <AccountList>
          <AccountListItem>
            <InfoText>
              {`Last updated ${format(lastUpdate, "do MMM yyyy")}`}
            </InfoText>
          </AccountListItem>
          <AccountListItem>
            <InfoText>
              {`Next update ${format(
                add(lastUpdate, { days: account.updateAfterDays }),
                "do MMM yyyy"
              )}`}
            </InfoText>
          </AccountListItem>
        </AccountList>
      </AccountSection>
      <AccountSection>
        <AccountLabel>Property details</AccountLabel>
        <RowContainer>
          <AccountList>
            <AccountListItem>
              <InfoText>{account.name}</InfoText>
            </AccountListItem>
            <AccountListItem>
              <InfoText>{account.bankName}</InfoText>
            </AccountListItem>
            <AccountListItem>
              <InfoText>{account.postcode}</InfoText>
            </AccountListItem>
          </AccountList>
        </RowContainer>
      </AccountSection>
      {mortgage && (
        <AccountSection>
          <AccountLabel>Mortgage</AccountLabel>
          <RowContainer
            // This is a dummy action
            onClick={() => alert("You have navigated to the mortgage page")}
          >
            <AccountList>
              <AccountListItem>
                <InfoText>
                  {new Intl.NumberFormat("en-GB", {
                    style: "currency",
                    currency: "GBP",
                  }).format(
                    Math.abs(account.associatedMortgages[0].currentBalance)
                  )}
                </InfoText>
              </AccountListItem>
              <AccountListItem>
                <InfoText>{account.associatedMortgages[0].name}</InfoText>
              </AccountListItem>
            </AccountList>
          </RowContainer>
        </AccountSection>
      )}
      <AccountSection>
        <AccountLabel>Valuation changes</AccountLabel>
        <RowContainer
          // This is a dummy action
          onClick={() => alert("You have navigated to the mortgage page")}
        >
          <AccountList>
            <AccountListItem>
              <InfoText>
                Purchased for £{account.originalPurchasePrice} in{" "}
                {convertDateToString(account.originalPurchasePriceDate)}
              </InfoText>
            </AccountListItem>

            <AccountListItem>
              <InfoText>Since Purchase</InfoText>
              <ValuationContainer>
                {"£" + accountInsight.sincePurchase}(
                {accountInsight.sincePurchasePercentage + "%"})
              </ValuationContainer>
            </AccountListItem>
            <AccountListItem>
              <InfoText>Annual appreciation</InfoText>{" "}
              <ValuationContainer>
                {" "}
                {accountInsight.annualAppreciation + "%"}
              </ValuationContainer>
            </AccountListItem>
          </AccountList>
        </RowContainer>
      </AccountSection>
      <Button
        // This is a dummy action
        onClick={() => alert("You have navigated to the edit account page")}
      >
        Edit account
      </Button>
    </Inset>
  );
};

export default Detail;
