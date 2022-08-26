import { Card, CardContent, Grid, Typography, styled } from "@mui/material";


const Rightcontainer = styled(Grid)(({ theme }) => ({

    margin: '5px 0 0 -25px',
    display: 'flex',
    flexDirection: 'column',

[theme.breakpoints.between('sm','lg')]:{
    padding: '0 5px'
},
[theme.breakpoints.down('sm')]:{
    margin: '5px 0'
}

}));





const Article = ({ data }) => {
    return (
        <Card sx={{ marginBottom: 2, boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%),0 2px 10px 0 rgb(0 0 0 / 12%) ' }} >
            <CardContent sx={{ padding: 1, paddingBottom: '1px !important' }}>
                <Grid container>
                    <Grid lg={5} sm={5} xs={12} item>
                        <img src={data.url} alt="images" style={{ height: 260, width: '88%', objectFit: 'cover', borderRadius: 5 }} />
                    </Grid>
                    <Rightcontainer lg={7} md={7} sm={7} xs={12} item>
                        <Typography sx={{ fontWeight: '300px', fontSize: '22px', color: '#44444d', lineHeight: '27px' }}>
                            {data.title}
                        </Typography>
                        <Typography sx={{ color: ' #808290', fontSize: '12px', lineHeight: '22px ' }}>
                            <b>short</b> by {data.author} / {new Date(data.timestamp).toDateString()}
                        </Typography>
                        <Typography sx={{ lineHeight: '22px', color: '#44444d', marginTop: '5px', fontWeight: '300px' }}>
                            {data.description}
                        </Typography>
                        <Typography sx={{ fontSize: '12px', marginTop: 'auto ' }}>
                            read more at &nbsp;<a style={{ textDecoration: 'none', color: '#000' }} href={data.link} target='_blank'><b>{data.publisher}</b></a>
                        </Typography>
                    </Rightcontainer>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Article;