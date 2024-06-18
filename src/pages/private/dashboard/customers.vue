<!-- const fetchProductUrl = async (count = 4) => {
  try {
    const response = await axios.get(`https://api.8orbit.shop/api/v1/product-image`, {
      params: { count }
    });
    const res = response.data.presignedUrls;
    productUrl.value = res.map((el)=>el.imagename)
    console.log("---->",productUrl.value);
  
  } catch (error) {
    console.error('Error fetching images:', error);
  }
};


const savaproduct = {
  name: addproduct.productName,
  categoryId: addproduct.category,
  variants: productVariants.value,
  imagesName: productUrl.value
}; -->



<template>



</template>


<script>



</script>