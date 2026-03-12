import Image from "next/image";
import Link from "next/link";

// Hooks
import useProjectContext from "@hooks/use-project-context";

// Assets
import github from "@assets/github.svg";

// Vendor
import { Link2 } from "lucide-react";

export default function ProjectFooter() {
  //#region hooks
  const { repo_url, url, is_private } = useProjectContext();
  //#endregion

  return (
    <div className={`project-item-footer rounded-b bg-secondary-400`}>
      {!is_private ? (
        <Link href={repo_url} target="_blank">
          <Image src={github} alt="github" width={24} />
        </Link>
      )
        : <span></span>
      }
      <Link href={url} target="_blank">
        <Link2 size={24} />
      </Link>
    </div>
  );
}
