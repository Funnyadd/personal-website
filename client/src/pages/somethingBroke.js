import * as React from "react"
import Seo from "../components/seo";
import Layout from "../components/layout"
import { ErrorPageTopBar, Heading, Text } from "../components/PageCommon/PageElements";

const SomethingBrokePage = () => (
    <Layout>
        <Seo />
        <ErrorPageTopBar />
        <Heading>Something broke...</Heading>
        <Text>
            Unfortunately, this website is unavailable at this moment.<br/>
            Please come again later, the website should be back up shortly.<br/><br/>
            Sorry for this inconvenience.
        </Text>
        <Text>
            ~ Adam Mihajlovic
        </Text>
    </Layout>
)

export default SomethingBrokePage
