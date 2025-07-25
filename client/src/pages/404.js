import * as React from "react"
import Seo from "../components/seo";
import Layout from "../components/layout"
import { ErrorPageTopBar, Heading, Text } from "../components/PageCommon/PageElements";

const NotFoundPage = () => (
    <Layout>
        <Seo/>
        <ErrorPageTopBar />
        <Heading>404: Not Found</Heading>
        <Text>
            You just hit a route that doesn&#39;t exist...<br/>Sorry for that, please go back by clicking on the link below<br/>
            <a href="adammihajlovic.ca">adammihajlovic.ca</a>
        </Text>
        <Text>
            ~ Adam Mihajlovic
        </Text>
    </Layout>
)

export default NotFoundPage
