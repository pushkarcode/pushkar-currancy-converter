import Freecurrencyapi from "@everapi/freecurrencyapi-js";
const freecurrencyapi = new Freecurrencyapi(
  "fca_live_VP905UaBTRdAwypMACv5HGYPMgeexi0BxHBJKAF6"
);



  convertCurrancy("INR","USD",3);
 // ! this function get Api from FreecurrencyApi
 
 export async function convertCurrancy(fromCurrancy, toCurrancy,units)  {
      const res = await freecurrencyapi
      .latest({
        base_currency: fromCurrancy,
        currencies: toCurrancy,
      });
      const multiplier = res.data[toCurrancy];
      return multiplier*units;
}
