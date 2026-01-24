import os
from PIL import Image

IMAGE_DIR = '/home/ubuntu/shankara-experience/client/public/images/'
MAX_WIDTH = 1920

def optimize_images():
    print(f"Scanning {IMAGE_DIR}...")
    for filename in os.listdir(IMAGE_DIR):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')) and not filename.lower().endswith('.webp'):
            filepath = os.path.join(IMAGE_DIR, filename)
            try:
                with Image.open(filepath) as img:
                    # Calculate new size maintaining aspect ratio
                    if img.width > MAX_WIDTH:
                        ratio = MAX_WIDTH / img.width
                        new_height = int(img.height * ratio)
                        img = img.resize((MAX_WIDTH, new_height), Image.Resampling.LANCZOS)
                        print(f"Resized {filename} to {MAX_WIDTH}x{new_height}")

                    # Save as WebP
                    new_filename = os.path.splitext(filename)[0] + '.webp'
                    new_filepath = os.path.join(IMAGE_DIR, new_filename)
                    
                    # Use higher quality for detailed images, but still get compression
                    img.save(new_filepath, 'WEBP', quality=85, method=6)
                    
                    old_size = os.path.getsize(filepath)
                    new_size = os.path.getsize(new_filepath)
                    reduction = (old_size - new_size) / old_size * 100
                    
                    print(f"Converted {filename}: {old_size/1024:.1f}KB -> {new_size/1024:.1f}KB ({reduction:.1f}% reduction)")
            except Exception as e:
                print(f"Error processing {filename}: {e}")

if __name__ == "__main__":
    optimize_images()
