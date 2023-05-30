import {useEffect, useState} from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {Button, Card, CardContent, CardMedia, Typography,} from "@mui/material";
import CardActions from '@mui/material/CardActions';


function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((data) => setProducts(data));
    }, []);

    async function getProducts() {
        const response = await fetch("http://localhost:3000/products");
        return await response.json();
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <h1>Alegrosz</h1>
                </Grid>
                <Grid xs={12}>
                    {products.map((product) => (
                        <Card key={product.id} sx={{maxWidth: 345}}>
                            <CardMedia
                                sx={{height: 140}}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {product.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {product.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">See details</Button>
                            </CardActions>
                        </Card>
                    ))}
                </Grid>
            </Grid>
        </>
    );
}

export default App;