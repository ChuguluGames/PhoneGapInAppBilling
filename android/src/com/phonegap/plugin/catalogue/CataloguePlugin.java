package com.phonegap.plugin.catalogue;

import com.phonegap.api.Plugin;
import com.phonegap.api.PluginResult;
import com.phonegap.api.PluginResult.Status;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import catalogue.Products;

public class CataloguePlugin extends Plugin {

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

    System.out.println("calling " + action);

    PluginResult result = null;
    JSONObject response = null;

    try {
      response = data.getJSONObject(0);
        
    } catch (JSONException e) {
      System.out.println(e);
    }

    /* get all products */
    if (action.equals("fetch")) {
      ProductsDelegate products = new ProductsDelegate();
      products.fetch();
    }

    return result;    
  };

  public void sendJavascript(String event) {
    ctx.sendJavascript("window.plugins.Catalogue.events." + event + "()");
  }

  public void sendJavascript(String event, String data) {
    ctx.sendJavascript("window.plugins.Catalogue.events." + event + "(" + data + ")");
  }

  public class ProductsDelegate extends Products {
    @Override
    public void onFetch() {
      try {
        JSONObject responseObject = new JSONObject();
        responseObject.put("products", this.productsArray);

        String responseString = responseObject.toString();

        sendJavascript("onFetch", responseString);

      } catch (JSONException e) {
        System.out.println(e);
      }

      
    }
  }
}