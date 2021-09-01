/* eslint-disable */
/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// !!! DO NOT EDIT THIS FILE !!!                                                       //
//                                                                                     //
// This file is auto-generated by scripts/generate-web-api-types.sh in the repository. //
// Please refer to the script code to learn how to update the source data.             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////

import { WebAPICallResult } from '../WebClient';
export type OpenIDConnectTokenResponse = WebAPICallResult & {
  ok?:            boolean;
  warning?:       string;
  error?:         string;
  needed?:        string;
  provided?:      string;
  access_token?:  string;
  token_type?:    string;
  id_token?:      string;
  refresh_token?: string;
  expires_in?:    number;
};
