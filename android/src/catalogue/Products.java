package catalogue;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class Products {
  public JSONArray productsArray;   

  public void fetch() {
    addProduct(1, "chaussettes", 5);
    addProduct(2, "pantalon", 30);
    addProduct(3, "casquettes", 15);
    addProduct(4, "pull", 30);

    onFetch();
  }

  private void addProduct(int id, String name, int price) {
    try {
      JSONObject productObject = new JSONObject();

      productObject.put("id", id);
      productObject.put("name", name);
      productObject.put("price", price);

      productsArray.put(productObject);       
    } catch (JSONException e) {
      System.out.println(e);
    }        
  }

  public void onFetch() {
    
  }
}