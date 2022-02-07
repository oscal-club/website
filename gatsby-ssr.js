const React = require('react');
const withAssetPrefix = require('gatsby-link').withAssetPrefix;

exports.onRenderBody = ({setPostBodyComponents}) => {
          setPostBodyComponents([
            <script 
                key="design-system-loader"
                type="text/javascript"
                src={withAssetPrefix("assets/js/uswds.min.js")}
            />
          ]);
};