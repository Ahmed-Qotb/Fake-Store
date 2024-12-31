async function productDetails({ params }: { params: { productId: string } }) {
  const { productId } = await params;
  const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const prductDetails = await data.json();
  console.log(productId);

  console.log(prductDetails);

  return (
    <>
      <div className="container">
        <div className=" sm:flex p-10 items-center content-center">
          {/* image */}
          <div className="sm:w-[30%] flex m-8">
            <img
              src={prductDetails.image}
              alt="product image"
              className="rounded-lg w-[100%] mx-auto"
            />
          </div>
          {/* data */}
          <div className="sm:w-[70%] grid grid-cols-1 gap-5 text-lg">
            <p><span className="font-bold">title : </span>{prductDetails.title}</p>
            <p><span className="font-bold">description : </span>{prductDetails.description}</p>
            <p><span className="font-bold">price : </span>{prductDetails.price} $</p>
            <p><span className="font-bold">category : </span>{prductDetails.category}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default productDetails;
