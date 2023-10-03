import textwrap

class Hero:
    def __init__(self):
        self._name = input("Digite o nome do herói: ") # Inserir o nome do personagem
        self._age = input("Digite a idade do herói: ") # Inserir a idade do personagem
        self._inputClass = input(f"Escolha a classe do herói:\n1 - Guerreiro \n2 - Mago \n3 - Monge \n4 - Ninja \n") # Inserir entre 4 opções a classe do personagem
        self._class = ""
        
    def newHero(self):
        if self._inputClass == '1':
            self._class = "Guerreiro"
        elif self._inputClass == '2':
            self._class = "Mago"
        elif self._inputClass == '3':
            self._class = "Monge"
        elif self._inputClass == '4':
            self._class = "Ninja"

    def atacar(self):
        if self._class == "Guerreiro":
            print(f"\n{self._class} {self._name} usou a espada\n")
        elif self._class == "Mago":
            print(f"\n{self._class} {self._name} lançou magia")
        elif self._class == "Monge":
            print(f"\n{self._class} {self._name} usou artes marciais")
        elif self._class == "Ninja":
            print(f"\n{self._class} {self._name} usou shuriken")

def menu(hero1):
    menu = f"""  
    ================ MENU ================
    
                {hero1._class} {hero1._name}
                
[a] Atacar
[t] Terminar
    
    => """
    
    return input(textwrap.dedent(menu))

def main():
    
    hero1 = Hero()
    hero1.newHero()
    while True:
        opcao = menu(hero1)
        if opcao == "a":
            hero1.atacar()
        elif opcao == "t":
            print("Encerrado!")
            break
        else:
            print("Opção inválida!")

main()
    


