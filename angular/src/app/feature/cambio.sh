#!/bin/bash

# Definición de variables en minúsculas
original_1="agencias"
replace_1="boletos"

original_2="agencia"
replace_2="boleto"

DIR="./boleto/"

# Convertir la inicial de original_X a mayúsculas
ORIGINAL_1_UPPER="${original_1^}"
ORIGINAL_2_UPPER="${original_2^}"

REPLACE_1_UPPER="${replace_1^}"
REPLACE_2_UPPER="${replace_2^}"

# Modificar contenido de archivos
find $DIR -type f -exec sed -i "s/$ORIGINAL_1_UPPER/$REPLACE_1_UPPER/g" {} \;
find $DIR -type f -exec sed -i "s/$original_1/$replace_1/g" {} \;
find $DIR -type f -exec sed -i "s/$ORIGINAL_2_UPPER/$REPLACE_2_UPPER/g" {} \;
find $DIR -type f -exec sed -i "s/$original_2/$replace_2/g" {} \;

# Crear un listado de directorios desde el más profundo hacia la raíz
find $DIR -depth -type d > dirs.txt

# Iterar sobre el listado para renombrar los directorios
while read dir; do
    if [[ $dir == *$ORIGINAL_1_UPPER* ]]; then
        mv "$dir" "${dir/$ORIGINAL_1_UPPER/$REPLACE_1_UPPER}"
    elif [[ $dir == *$original_1* ]]; then
        mv "$dir" "${dir/$original_1/$replace_1}"
    elif [[ $dir == *$ORIGINAL_2_UPPER* ]]; then
        mv "$dir" "${dir/$ORIGINAL_2_UPPER/$REPLACE_2_UPPER}"
    elif [[ $dir == *$original_2* ]]; then
        mv "$dir" "${dir/$original_2/$replace_2}"
    fi
done < dirs.txt

# Eliminar el archivo de listado de directorios
rm dirs.txt

# Renombrar archivos
find $DIR -type f | while read file; do
    if [[ $file == *$ORIGINAL_1_UPPER* ]]; then
        mv "$file" "${file/$ORIGINAL_1_UPPER/$REPLACE_1_UPPER}"
    elif [[ $file == *$original_1* ]]; then
        mv "$file" "${file/$original_1/$replace_1}"
    elif [[ $file == *$ORIGINAL_2_UPPER* ]]; then
        mv "$file" "${file/$ORIGINAL_2_UPPER/$REPLACE_2_UPPER}"
    elif [[ $file == *$original_2* ]]; then
        mv "$file" "${file/$original_2/$replace_2}"
    fi
done

echo "Modificaciones completadas."
