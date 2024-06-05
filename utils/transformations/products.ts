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

/* interface IFormdata {
    title: string;
    price: string;
    description: string;
    image: string;
  }
  interface ICategory {
    value: string;
    label: string;
  }
  
  interface Iprops {
    formdata: IFormdata;
    category: ICategory | null;
  }
  
  const upsertProductsTransformation = ({ formdata, category }: Iprops) => {
    const { title, price, description, image } = formdata;
  
    const dataCreate = {
      title: title,
      price: parseFloat(price),
      description: description,
      image: image,
      category: {
        connect: {
          id: category?.value,
        },
      },
    };
    const dataUpdate = {
      title: {
        set: title,
      },
      price: {
        set: parseFloat(price),
      },
      description: {
        set: description,
      },
      image: {
        set: image,
      },
      category: {
        connect: {
          id: category?.value,
        },
      },
    };
    return { dataCreate, dataUpdate };
  };
  
  export default upsertProductsTransformation; */