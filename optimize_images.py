import os
from PIL import Image
import sys

def optimize_images(directory):
    if not os.path.exists(directory):
        print(f"Directory {directory} does not exist.")
        return

    # Extensions to process
    valid_extensions = {'.png', '.jpg', '.jpeg'}
    
    # Counter for stats
    processed_count = 0
    saved_space = 0

    print(f"Scanning {directory}...")

    for root, dirs, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)
            filename, ext = os.path.splitext(file)
            
            if ext.lower() not in valid_extensions:
                continue

            # Skip if .webp already exists (idempotency)
            webp_path = os.path.join(root, filename + ".webp")
            if os.path.exists(webp_path):
                print(f"Skipping {file}, {filename}.webp already exists.")
                continue

            try:
                with Image.open(file_path) as img:
                    # Logic for resizing
                    # Hero image: max width 1920
                    # Others: max width 800 (mostly for packages/badges)
                    
                    target_width = img.width
                    
                    if "hero" in filename.lower():
                         if img.width > 1920:
                             target_width = 1920
                    elif img.width > 800:
                        # Don't resize if it's already small enough
                        # But for consistency, let's cap package images/badges at 800w 
                        # (high enough for retina mobile, small enough for load)
                        target_width = 800
                    
                    if target_width < img.width:
                        # Calculate new height to maintain aspect ratio
                        ratio = target_width / img.width
                        new_height = int(img.height * ratio)
                        img = img.resize((target_width, new_height), Image.Resampling.LANCZOS)
                        print(f"Resized {file} to {target_width}x{new_height}")

                    # Save as WebP
                    img.save(webp_path, 'WEBP', quality=80)
                    
                    original_size = os.path.getsize(file_path)
                    new_size = os.path.getsize(webp_path)
                    saved = original_size - new_size
                    saved_space += saved
                    processed_count += 1
                    
                    print(f"Converted {file}: {original_size/1024:.1f}KB -> {new_size/1024:.1f}KB (Saved {saved/1024:.1f}KB)")

            except Exception as e:
                print(f"Error processing {file}: {e}")

    print(f"\nFinished! Processed {processed_count} images.")
    print(f"Total space saved: {saved_space / (1024 * 1024):.2f} MB")

if __name__ == "__main__":
    # Check for Pillow
    try:
        import PIL
    except ImportError:
        print("Pillow library not found. Installing...")
        import subprocess
        subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
        print("Pillow installed. continuing...")
        import PIL
        
    target_dir = os.path.join(os.getcwd(), "Images")
    optimize_images(target_dir)
