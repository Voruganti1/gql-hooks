import React from "react";
import { gql } from "@apollo/client";

export const COUNTRY_DATA = gql`
  query {
    countries {
      code
      name
      native
      phone
      continent {
        code
        name
      }
      capital
      currency
      languages {
        code
        name
        native
        rtl
      }
      emoji
      emojiU
      states {
        code
        name
      }
    }
  }
`;

export const COUNTRY_FILTERED_DATA = gql`
  query ($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      name
      native
      phone
      continent {
        code
        name
      }
      capital
      currency
      languages {
        code
        name
        native
        rtl
      }
      emoji
      emojiU
      states {
        code
        name
      }
    }
  }
`;
