# react-playground

Repo for learning

yarn - install proj deps | yarn dev - run dev server

## Context Tutorial

1. create ctx (context/DummyContext) - type/interface for ctx
2. create ctx provider component (context/DummyProvider) - provide values for consuming
3. create custom hook for consuming context
   3.1 check for null --> throw Error
   3.2 return ctx
4. wrap App with ctx provider component
5. use anywhere with custom ctx hook
