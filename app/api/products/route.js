import dbConn from "../lib/dbConn";
import Product from "../models/User";

export async function POST(req) {
  await dbConn();

  try {
    const { title, desc, price } = await req.json();
    if (!title || !desc || !price) {
      JSON.stringify({ fail: "All fill must be filled!" }), { status: 404 };
    }
    const product = await Product.create({ title, desc, price });
    return new Response(JSON.stringify({ msg: "Product added!!", product }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ fail: "Internal server error!" }), {
      status: 500,
    });
  }
}

export async function GET(req) {
  await dbConn();

  try {
    const products = await Product.find().sort({_id: -1});

    return new Response(JSON.stringify(products), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ fail: "Internal server error!" }), {
      status: 500,
    });
  }
}

export async function PUT(req) {
  await dbConn();

  try {
    const { title, desc, price, _id } = await req.json();

    await Product.updateOne({ _id }, { title, desc, price });
    return new Response(JSON.stringify({ msg: "Product updated!" }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ fail: "Internal server error!" }), {
      status: 500,
    });
  }
}

