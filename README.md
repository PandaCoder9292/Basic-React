#Begin to create Projects with React

// structure
// Header - Logo, Nav items(Home, About, Cart)
// Body
// Footer

#Components (Functional and State)
and
#Hooks(Normal JS function) - 
1. useState()
2. useEffect()

# Important Interview Question
Que> When useEffect is called?
Ans. Cases->
    1. When there is no Dependency Array at all     useEffect(() =>{} )
        - Then it will be called every time the component(in which it is) is Rendered or re-rendered
    2. When there is empty Dependency Array         useEffect(() =>{}, [])
        -Then is is called only once, when comoponent Renders(in beginning) only once
    3. When there is value in Dependency Array