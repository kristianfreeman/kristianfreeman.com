import os
import re
from datetime import datetime

# Update these paths as necessary
PATH_TO_BLOG_POSTS = "./blog/"
FILES_EXTENSION = ".markdown"

def update_front_matter(file_content, filename):
    # Extract the current front matter using regex
    old_front_matter = re.search(r"---(.*?)---", file_content, re.DOTALL)
    
    if not old_front_matter:
        print(f"Error: No front matter found in {filename}")
        return None
    
    # Extract the old content within the front matter
    old_content = old_front_matter.group(1)
    
    # Get the title from the old front matter, if it exists
    title_match = re.search(r"title:\s*(.*)", old_content)
    if not title_match:
        print(f"Error: No title found in the front matter of {filename}")
        return None
    
    current_title = title_match.group(1).strip()  # Extract and clean the current title
    
    # Get the date from the old front matter
    date_match = re.search(r"date:\s*([\d-]+)", old_content)
    if not date_match:
        print(f"Error: No date found in the front matter of {filename}")
        return None

    old_date = date_match.group(1)  
    new_date = datetime.strptime(old_date, '%Y-%m-%d').strftime("%b %d %Y")  # Convert date format

    # Build the new front matter with the extracted title, blank description, and updated tags
    new_front_matter = f"""---
title: {current_title}
description: ""
pubDate: '{new_date}'
tags:
  - archive
---
"""
    
    # Replace the old front matter with the new front matter in the content
    updated_content = file_content.replace(old_front_matter.group(0), new_front_matter)

    return updated_content

def process_files():
    # Loop through the files and update each one that starts with "20"
    for filename in os.listdir(PATH_TO_BLOG_POSTS):
        if filename.startswith("20") and filename.endswith(FILES_EXTENSION):
            full_path = os.path.join(PATH_TO_BLOG_POSTS, filename)
            
            with open(full_path, 'r', encoding='utf-8') as file:
                original_content = file.read()

            # Process and update the content
            updated_content = update_front_matter(original_content, filename)
            
            if updated_content:
                # Write the updated content back to the file
                with open(full_path, 'w', encoding='utf-8') as file:
                    file.write(updated_content)
                print(f"Updated front matter in {filename}")
            else:
                print(f"Skipped file {filename} due to errors.")

if __name__ == "__main__":
    process_files()
    print("All timestamp-prefixed blog posts have been processed.")

