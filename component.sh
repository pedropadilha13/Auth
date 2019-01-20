class_component() {
    echo -e "import React, { Component } from 'react'; \nimport { View } from 'react-native'; \n \nclass $1 extends Component { \n  render() { \n    return <View />; \n  } \n} \n \nexport default $1;" >> $file
}

functional_component() {
    echo -e "import React from 'react'; \nimport { View, Text } from 'react-native'; \n\nconst $1 = props => { \n	return ( \n		<View></View> \n	); \n}; \n\nexport default $1;" >> $file
}

if [ $# -gt 1 ]; then
    file="$(pwd)/src/components/$2.js"
    if [ $1 == "-c" ]; then
        class_component "$2"
    elif [ $1 == "-f" ]; then
        functional_component "$2"
    fi
else
    file="$(pwd)/src/components/$1.js"
    functional_component "$1"
fi
