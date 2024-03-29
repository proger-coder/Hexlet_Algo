// описание https://github.com/hexlet-components/js-immutable-fs-trees
// подробное описание https://github.com/hexlet-components/js-immutable-fs-trees/tree/main/docs


import {
    mkfile, mkdir, isDirectory, isFile, map,
} from '@hexlet/immutable-fs-trees';

export default function makeTree(){
    return mkdir('nodejs-package',
        [
            mkfile('Makefile'),
            mkfile('README.md'),
            mkdir('dist'),
            mkdir('__tests__',[
                mkfile('half.test.js',{type: 'text/javascript'})
            ]),
            mkfile('babel.config.js',{type: 'text/javascript' }),
            mkdir('node_modules',[
                mkdir('@babel',[
                    mkdir('cli',[
                        mkfile('LICENSE')])
                ])
            ],{ owner: 'root', hidden: false })
        ],{ hidden: true })
}

// let e = makeTree();
// console.log(e);