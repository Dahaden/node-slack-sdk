/* tslint:disable */
/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// !!! DO NOT EDIT THIS FILE !!!                                                       //
//                                                                                     //
// This file is auto-generated by scripts/generate-web-api-types.sh in the repository. //
// Please refer to the script code to learn how to update the source data.             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////

import { WebAPICallResult } from '../WebClient';
export type CallsAddResponse = WebAPICallResult & {
  ok?:                boolean;
  call?:              Call;
  error?:             string;
  response_metadata?: ResponseMetadata;
  needed?:            string;
  provided?:          string;
};

export interface Call {
  id?:                   string;
  date_start?:           number;
  external_unique_id?:   string;
  join_url?:             string;
  external_display_id?:  string;
  title?:                string;
  users?:                User[];
  desktop_app_join_url?: string;
}

export interface User {
  slack_id?:     string;
  external_id?:  string;
  display_name?: string;
  avatar_url?:   string;
}

export interface ResponseMetadata {
  messages?: string[];
}
