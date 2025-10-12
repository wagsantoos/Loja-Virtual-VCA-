
export default ButtonsSizes

function ButtonsSizes(){
    return(
        <div className="bg-green-300 min-h-10 flex ml-35">
                  <button
                    role="option"
                    data-testid="size-selector-button"
                    aria-selected="false"
                    aria-label="Selecionar tamanho EEG"
                    class="SizeSelector-styled__SizeButton-sc-5376454-4 kDFMrM"
                    className=" min-w-9  mt-2 pl-2.5 pr-2.5 rounded-sm border border-solid cursor-pointer hover:border-yellow-300 transition-colors duration-100 focus:border-yellow-300 border-gray-600"
                  >
                    P
                  </button>

                  <button
                    role="option"
                    data-testid="size-selector-button"
                    aria-selected="false"
                    aria-label="Selecionar tamanho EEG"
                    class="SizeSelector-styled__SizeButton-sc-5376454-4 kDFMrM"
                    className="min-w-9 ml-2 mt-2 pl-2.5 pr-2.5 rounded-sm border border-solid cursor-pointer hover:border-yellow-300 transition-colors duration-100 focus:border-yellow-300 border-gray-600"
                  >
                    M
                  </button>

                  <button
                    role="option"
                    data-testid="size-selector-button"
                    aria-selected="false"
                    aria-label="Selecionar tamanho EEG"
                    class="SizeSelector-styled__SizeButton-sc-5376454-4 kDFMrM"
                    className="min-w-9 ml-2 mt-2 pl-2.5 pr-2.5 rounded-sm border border-solid cursor-pointer hover:border-yellow-300 transition-colors duration-100 focus:border-yellow-300 border-gray-600"
                  >
                    G
                  </button>

                  <button
                    role="option"
                    data-testid="size-selector-button"
                    aria-selected="false"
                    aria-label="Selecionar tamanho EEG"
                    class="SizeSelector-styled__SizeButton-sc-5376454-4 kDFMrM"
                    className="min-w-9 ml-2 mt-2 pl-2.5 pr-2.5 rounded-sm border border-solid cursor-pointer hover:border-yellow-300 transition-colors duration-100 focus:border-yellow-300 border-gray-600"
                  >
                    GG
                  </button>
                </div>
    );
}