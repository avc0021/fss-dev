module.exports = {
    "name": "test-ext-1",
    "publisher": "uiw",
    "cards": [{
        "type": "TestExtCard",
        "source": "./src/cards/TestExtCard",
        "title": "TestExt Card",
        "displayCardType": "TestExt Card",
        "description": "This is an introductory card to the Ellucian Experience SDK",
        "pageRoute": {
            "route": "/",
            "excludeClickSelectors": ['a']
        }
    }],
    "page": {
        "source": "./src/page/router.jsx"
    }
}