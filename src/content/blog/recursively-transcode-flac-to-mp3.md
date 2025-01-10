---
title: "Recursively transcode FLAC files to MP3"
description: "A quick script for recursively transcoding lossless FLAC files to MP3"
pubDate: "Jan 100 2025"
tags:
  - tip
---

I have an [MP3 player](https://x.com/kristianf_/status/1836457141244207306) that I use while I'm out. It uses a microSD card for storage. My personal media library is mostly FLAC, so when I want to transfer songs to the MP3 player, I need to transcode them to MP3.

The below script uses Python and [mutagen](https://mutagen.readthedocs.io/en/latest/) to recursively transcode all FLAC files in a directory to MP3. It will confirm that the MP3 was correctly created, before deleting the original FLAC file.

```python
import os
from pathlib import Path
import subprocess
from mutagen.flac import FLAC

def convert_flac_to_mp3(flac_path):
    try:
        # Get the output MP3 path
        mp3_path = str(flac_path).replace('.flac', '.mp3')
        
        # If MP3 already exists, skip
        if os.path.exists(mp3_path):
            print(f"MP3 already exists, skipping: {mp3_path}")
            return False

        # Read FLAC metadata
        flac_audio = FLAC(flac_path)
        
        # Construct ffmpeg command with overwrite prevention
        cmd = [
            'ffmpeg',
            '-i', str(flac_path),
            '-ab', '320k',  # 320kbps bitrate
            '-map_metadata', '0',  # Copy metadata
            '-id3v2_version', '3',  # Use ID3v2.3 tags
            '-n',  # Don't overwrite output files
            mp3_path
        ]
        
        # Execute conversion
        result = subprocess.run(cmd, capture_output=True, text=True)
        
        if result.returncode == 0:
            # Verify the MP3 file exists and has size > 0
            if os.path.exists(mp3_path) and os.path.getsize(mp3_path) > 0:
                print(f"Successfully converted: {flac_path}")
                # Delete original FLAC file
                # NOTE: Comment this out if you want to keep the original FLAC file
                os.remove(flac_path)
                print(f"Deleted original: {flac_path}")
                return True
            else:
                print(f"Conversion seemed successful but MP3 file is missing or empty: {mp3_path}")
                return False
        else:
            print(f"Error converting {flac_path}: {result.stderr}")
            return False
            
    except Exception as e:
        print(f"Error processing {flac_path}: {str(e)}")
        return False

def main():
    # Get the current directory
    directory = Path('.')
    
    # Find all FLAC files recursively
    flac_files = list(directory.rglob('*.flac'))
    
    if not flac_files:
        print("No FLAC files found.")
        return
    
    print(f"Found {len(flac_files)} FLAC files.")
    
    # Convert each FLAC file
    successful_conversions = 0
    for flac_file in flac_files:
        print(f"\nProcessing: {flac_file}")
        if convert_flac_to_mp3(flac_file):
            successful_conversions += 1
    
    print(f"\nConversion complete. Successfully converted {successful_conversions} of {len(flac_files)} files.")

if __name__ == '__main__':
    main()
```

It runs recursively in a directory, so I store it at the root of my microSD card. My process is:

1. Transfer FLAC files to the microSD card
2. Run the script

You could configure this to run on a schedule on your media drive, or tweak some of the code to not delete the FLAC file (search for the `NOTE:` line and comment out the line below it).

This works for me, and it saves a ton of space on my microSD card.
