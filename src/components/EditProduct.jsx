import { Component } from "react";
import { Button, TextField } from "@mui/material";

class EditProduct extends Component {
    render() {
        return (
            <form onSubmit={() => {}}>
                <TextField
                    id="name"
                    label="Product Name"
                    variant="outlined"
                    fullWidth
                    sx={{ marginBottom: "20px" }}
                />

                <TextField
                    id="description"
                    label="Product Description"
                    variant="outlined"
                    multiline
                    fullWidth
                    rows={4}
                    sx={{ marginBottom: "20px" }}
                />

                <TextField
                    id="price"
                    label="Price"
                    variant="outlined"
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
                    type="number"
                    fullWidth
                    InputProps={{ inputProps: { min: 0 } }}
                    sx={{ marginBottom: "20px" }}
                />

                <Button type="submit" variant="contained">
                    Add Product
                </Button>
            </form>
        );
    }
}
function EditProductWithID() {
    const {productID} = useParams();

    return <EditProduct productID={productID} />;
}
export default EditProduct;