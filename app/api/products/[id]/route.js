import dbConn from "../../lib/dbConn";
import Product from "../../models/User";

export async function GET(req, {params}) {
  await dbConn();

  try {
    const id = params.id;

    if (!id) {
        return new Response(JSON.stringify({ fail: "Params id not found!" }), {
            status: 404,
          });
    }

    const product = await Product.findById(id);

    return new Response(JSON.stringify({ msg: "Product Found!", product }), {
      status: 201,
    });

  } catch (error) {
    return new Response(JSON.stringify({ fail: "Internal server error!" }), {
      status: 500,
    });
  }
}
