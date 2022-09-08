import { defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'


export default defineConfig((command, mode)=>{
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  return{
    plugins: [
		vue(),
		vuetify({ autoImport: true }),
	],

    resolve:{
      alias:{
        '@' : resolve(__dirname, './src')
      },
    },
    server:{
      port: process.env.VITE_PORT
    },
  }
})
