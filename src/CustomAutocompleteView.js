import PropTypes from "prop-types";
import React from "react";

import { Result } from "@elastic/react-search-ui";

import {
  Container,
  Table
} from 'react-bulma-components';



function CustomAutocompleteView({
  autocompletedResults,
  getItemProps,
}) {
  let index = 0;
  return (
    <div className="sui-search-box__autocomplete-container">
      <Container style={{"margin-left": "15px", "margin-top": "-20px"}} className="is-widescreen">
        <span className="is-uppercase is-size-7 is-small has-text-grey">
          Résultats
        </span>

        <Table className="is-narrow">
            <tr className="is-uppercase is-size-7 is-small has-text-grey">
              <td> Prénom Nom </td>
              <td> Naissance </td>
              <td> Décès </td>
            </tr>
          <tbody>
            {!!autocompletedResults && autocompletedResults.map((result, i) => (
              <tr className="is-size-7 is-hoverable"
                {...getItemProps({
                  key: result.id.raw,
                  index: i,
                  item: result
                })}
              >
                <td>
                  {result.PRENOM.raw} {result.NOM.raw}
                </td>
                <td>
                  {result.DATE_NAISSANCE.raw.replace(/(\d{4})(\d{2})(\d{2})/,"$3/$2/$1")
                  } {
                  result.COMMUNE_NAISSANCE
                  ? "- " + result.COMMUNE_NAISSANCE.raw
                  : result.PAYS_NAISSANCE
                    ? "- " + result.PAYS_NAISSANCE.raw
                    : ""
                  }
                </td>
                <td>
                  {result.DATE_DECES.raw.replace(/(\d{4})(\d{2})(\d{2})/,"$3/$2/$1")
                  } {
                    result.COMMUNE_DECES
                    ? "- " + result.COMMUNE_DECES.raw
                    : result.PAYS_DECES
                      ? "- " + result.PAYS_DECES.raw
                      : ""
                    }
                </td>
              </tr>
              )
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default CustomAutocompleteView;


/*
({ autocompletedResults, getItemProps }) => (
          <div className="sui-search-box__autocomplete-container">
            <Container style={{"margin-left": "15px", "margin-top": "-20px"}} className="is-widescreen">
              <span className="is-uppercase is-size-7 is-small has-text-grey">
                Résultats
              </span>
              <Table>
                <thead>
                  <tr className="is-uppercase is-size-7 is-small has-text-grey">
                    <td> Prénom Nom </td>
                    <td> Naissance </td>
                    <td> Décès </td>
                  </tr>
                </thead>
                <tbody>
                  {autocompletedResults.map((result, i) => (
                      <tr className="is-size-7 is-small"
                        {...getItemProps({
                          key: result.id.raw,
                          item: result
                        })}
                      >
                        <td>
                          {result.PRENOM.raw} {result.NOM.raw}
                        </td>
                        <td>
                          {result.DATE_NAISSANCE.raw.replace(/(\d{4})(\d{2})(\d{2})/,"$3/$2/$1")
                          } {
                          result.COMMUNE_NAISSANCE
                          ? "- " + result.COMMUNE_NAISSANCE.raw
                          : result.PAYS_NAISSANCE
                            ? "- " + result.PAYS_NAISSANCE.raw
                            : ""
                          }
                        </td>
                        <td>
                          {result.DATE_DECES.raw.replace(/(\d{4})(\d{2})(\d{2})/,"$3/$2/$1")
                          } {
                            result.COMMUNE_DECES
                            ? "- " + result.COMMUNE_DECES.raw
                            : result.PAYS_DECES
                              ? "- " + result.PAYS_DECES.raw
                              : ""
                            }
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Container>
          </div>
        )
*/