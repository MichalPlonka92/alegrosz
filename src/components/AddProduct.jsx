import { Formik } from "formik";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Button, TextField, Typography } from "@mui/material";

function AddProduct() {
    async function addProductAPI(data) {
        const response = await fetch("http://localhost:3000/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        return await response.json();

    }
    function handleSubmit(values, {setSubmitting}) {

    }

    return (
        <Container maxWidth="xl" sx={{ marginTop: "20px" }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h3" gutterBottom>
                        Add Product
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Formik
                        initialValues={{
                            name: "",
                            description: "",
                            price: 0,
                            quantity: 0,
                        }}
                        validate={() => {
                            return {};
                        }}

                    >
                        {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isSubmitting,
                              /* and other goodies */
                          }) => (
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    id="name"
                                    label="Product Name"
                                    variant="outlined"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    fullWidth
                                    sx={{ marginBottom: "20px" }}
                                />

                                <TextField
                                    id="description"
                                    label="Product Description"
                                    variant="outlined"
                                    value={values.description}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    multiline
                                    fullWidth
                                    rows={4}
                                    sx={{ marginBottom: "20px" }}
                                />

                                <TextField
                                    id="price"
                                    label="Price"
                                    variant="outlined"
                                    value={values.price}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="number"
                                    min="0"
                                    fullWidth
                                    InputProps={{ inputProps: { min: 0 } }}
                                    sx={{ marginBottom: "20px" }}
                                />

                                <TextField
                                    id="quantity"
                                    label="Quantity"
                                    variant="outlined"
                                    value={values.quantity}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="number"
                                    fullWidth
                                    InputProps={{ inputProps: { min: 0 } }}
                                    sx={{ marginBottom: "20px" }}
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    disabled={isSubmitting}
                                >
                                    Add Product
                                </Button>
                            </form>
                        )}
                    </Formik>
                </Grid>
            </Grid>
        </Container>
    );
}

export default AddProduct;