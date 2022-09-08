import { defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

export default defineConfig((command, mode)=>{
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  return{
    plugins: [vue()],

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
