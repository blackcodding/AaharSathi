#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const {program} = require('commander');

program
  .command('create <name>')
  .description('Create component structure with TypeScript files')
  .action(name => {
    // Determine the current working directory
    const currentDirectory = __dirname;
    const srcComponentsPath = path.join(currentDirectory, 'src', 'components');

    // Determine the destination path
    const folderPath = path.resolve(srcComponentsPath, name);

    // Create folder
    fs.mkdirSync(folderPath, {recursive: true});

    const tsxContent = `
import {I${name}Props} from './${name}.types';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './${name}.styles';

const ${name} = (props: I${name}Props) => {
  const {} = props;

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
    {}
    </View>
  );
};

export default ${name};
`;
    const tsxPath = path.join(folderPath, `${name}.tsx`);
    fs.writeFileSync(tsxPath, tsxContent);

    const typesContent = `
export interface I${name}Props {}

export interface I${name}StyleProps {}
`;
    const typesPath = path.join(folderPath, `${name}.types.ts`);
    fs.writeFileSync(typesPath, typesContent);

    const stylesContent = `
import {I${name}StyleProps} from './${name}.types';
import {StyleSheet} from 'react-native';

export const generateStyles = (props: I${name}StyleProps) => {
  const {} = props || {};
  
  return StyleSheet.create({
    mainContainer: {},
  });
};
`;
    const stylesPath = path.join(folderPath, `${name}.styles.ts`);
    fs.writeFileSync(stylesPath, stylesContent);
  });

// Parse command line arguments
program.parse(process.argv);
