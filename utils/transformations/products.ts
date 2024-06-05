export const productsUpsertTrasnformations = ({
  formData,
  category,
}: {
  formData: any;
  category: any;
}) => {
  const dataCreate = {
    title: formData.title,
    price: parseFloat(formData.price),
    image: formData.image,
    description: formData.description,
    category: {
      connect: {
        id: category.value,
      },
    },
  };
  const dataUpdate = {
    title: {
      set: formData.title,
    },
    price: {
      set: parseFloat(formData.price),
    },
    description: {
      set: formData.description,
    },
    image: {
      set: formData.image,
    },
    category: {
      connect: {
        id: category.value,
      },
    },
  };
  return {
    dataCreate,
    dataUpdate,
  };
};
