package com.phonegap.plugin.billing;

import com.phonegap.api.Plugin;
import com.phonegap.api.PluginResult;
import com.phonegap.api.PluginResult.Status;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class BillingPlugin extends Plugin {

  /*
  * Executes the request and returns PluginResult.
  *
  * @param action action to perform.
  * @param data input data.
  * @param callbackId The callback id used when calling back into JavaScript.
  * @return A PluginResult object with a status and message.
  *
  * @see com.phonegap.api.Plugin#execute(java.lang.String,
  * org.json.JSONArray, java.lang.String)
  */
  @Override
  public PluginResult execute(String action, JSONArray data, String callbackId) {

    PluginResult result = null;
    JSONObject response = null;

    try {
      response = data.getJSONObject(0);
        
    } catch (JSONException e) {
      System.out.println(e);
    }
    
    return result;
  };

}