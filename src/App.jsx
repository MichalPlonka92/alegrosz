import {useEffect, useState} from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {TextField,} from "@mui/material";

function App() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getProducts().then((data) => setProducts(data));
    }, []);

    async function getProducts() {
        const response = await fetch("http://localhost:3000/products");
        return await response.json();
    }

    return (
        <>
            <Grid container rowSpacing={3} columnSpacing={3}>
                <Grid xs={12}>
                    <h1>Alegrosz</h1>
                </Grid>
                <Grid xs={12}>
                    <TextField
                        id="standard-basic"
                        label="Search Products"
                        variant="standard"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                </Grid>

                {products
                    .filter((product) =>
                        `${product.name} ${product.description}`
                            .toLowerCase()
                            .includes(search.toLowerCase())
                    )
                    .map((product) => (
                        <productCard key={product.id} product={product}/>

                    ))}
            </Grid>
        </>
    );
}

export default App;