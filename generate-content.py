#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script pour convertir tous les fichiers markdown en un seul fichier JavaScript
"""

import os

# Mapping des sections aux fichiers markdown
md_files = {
    'variables': 'guide-variables-structures-javascript.md',
    'strings': 'guide-strings-javascript.md',
    'arrays': 'guide-arrays-javascript.md',
    'objects': 'object.md',
    'arrow': 'guide-arrow-functions-javascript.md'
}

# Début du fichier JavaScript
js_content = "// Contenu complet des cours - Généré automatiquement depuis les fichiers .md\n"
js_content += "const courseContent = {\n"

# Lire chaque fichier markdown et l'ajouter au contenu JS
for key, filename in md_files.items():
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            md_content = f.read()
            
            # Échapper les backticks et ${} pour qu'ils fonctionnent dans un template literal
            md_content = md_content.replace('\\', '\\\\')  # Échapper les backslashes d'abord
            md_content = md_content.replace('`', '\\`')    # Échapper les backticks
            md_content = md_content.replace('${', '\\${')  # Échapper les template literals
            
            js_content += f"    {key}: `\n{md_content}\n`,\n\n"
            print(f"✅ {filename} ajouté ({len(md_content)} caractères)")
    except FileNotFoundError:
        print(f"⚠️  {filename} non trouvé, ignoré")
        continue

# Fin du fichier JavaScript
js_content += "};\n\n// Exporter le contenu pour l'utiliser dans l'application\nwindow.courseContent = courseContent;\n"

# Écrire le fichier JavaScript
with open('course-content.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"\n🎉 Fichier course-content.js créé avec succès!")
print(f"📊 Taille totale: {len(js_content)} caractères")
